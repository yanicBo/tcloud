import React, { Component } from 'react';
import { Form } from 'antd';
const FormItem = Form.Item;

import StandardFormRow from '../../../../../../components/StandardFormRow';
import TagSelect from '../../../../../../components/TagSelect';
import { status_customs, status_logistics, status_warehouse, status_company } from '../../../../data';

class DefaultSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: [],            // 申报主体
        };
        status_company().then((result) => {
            this.setState({ company: result })
        });
    }
    // 条件筛选
    handleFormSubmit = (param, name) => {
        this.props.form.setFieldsValue({
            [name]: param
        })
        this.props.customsListFetch()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { company } = this.state;
        const { tagValue } = this.props;
        return (
            <div className="default-search">
                <StandardFormRow title="报关单状态(多选)：">
                    <FormItem>
                        {getFieldDecorator('declarationType')(
                            <TagSelect
                                isMulti={true}
                                onChange={this.handleFormSubmit}
                                values={tagValue.declarationType}
                                datas={status_customs}
                                name="declarationType"
                            />
                        )}
                    </FormItem>
                </StandardFormRow>
                <StandardFormRow title="申报主体：">
                    <FormItem>
                        {getFieldDecorator('companyId')(
                            <TagSelect
                                isMulti={false}
                                onChange={this.handleFormSubmit}
                                values={tagValue.companyId}
                                datas={company}
                                name="companyId"
                            />
                        )}
                    </FormItem>
                </StandardFormRow>
                <StandardFormRow title="物流状态(多选)：">
                    <FormItem>
                        {getFieldDecorator('logisticsStatus')(
                            <TagSelect
                                isMulti={true}
                                onChange={this.handleFormSubmit}
                                values={tagValue.logisticsStatus}
                                datas={status_logistics}
                                name="logisticsStatus"
                            />
                        )}
                    </FormItem>
                </StandardFormRow>
                <StandardFormRow title="仓库类型：">
                    <FormItem>
                        {getFieldDecorator('depotType')(
                            <TagSelect
                                isMulti={false}
                                onChange={this.handleFormSubmit}
                                values={tagValue.depotType}
                                datas={status_warehouse}
                                name="depotType"
                            />
                        )}
                    </FormItem>
                </StandardFormRow>

            </div>
        );
    }
}

export default DefaultSearch;
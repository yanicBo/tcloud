import React, { Component } from 'react';
import { Form } from 'antd';
const FormItem = Form.Item;

import StandardFormRow from '../../../../../../components/StandardFormRow';
import TagSelect from '../../../../../../components/TagSelect';
import { options } from '../../../../data';

class DefaultSearch extends Component {
    constructor(props) {
        super(props);
    }
    // 条件筛选
    handleFormSubmit = (param, name) => {
        this.props.form.setFieldsValue({
            [name]: param
        })
        this.props.listFetch()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { tagValue } = this.props;
        return (
            <div className="default-search">
                <StandardFormRow title="处理状态：">
                    <FormItem>
                        {getFieldDecorator('state')(
                            <TagSelect
                                isMulti={false}
                                onChange={this.handleFormSubmit}
                                values={tagValue.state}
                                datas={options}
                                name="state"
                            />
                        )}
                    </FormItem>
                </StandardFormRow>
            </div>
        );
    }
}

export default DefaultSearch;
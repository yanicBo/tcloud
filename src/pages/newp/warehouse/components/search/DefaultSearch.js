import React, { Component } from 'react';
import { Form } from 'antd';
const FormItem = Form.Item;

import StandardFormRow from '../../../../../components/StandardFormRow';
import TagSelect from '../../../../../components/TagSelect';
import { status } from '../../../data';

class DefaultSearch extends Component {
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
                <StandardFormRow title="状态：">
                    <FormItem>
                        {getFieldDecorator('declarationType')(
                            <TagSelect
                                isMulti={false}
                                onChange={this.handleFormSubmit}
                                values={tagValue.declarationType}
                                datas={status}
                                name="declarationType"
                            />
                        )}
                    </FormItem>
                </StandardFormRow>
            </div>
        );
    }
}

export default DefaultSearch;
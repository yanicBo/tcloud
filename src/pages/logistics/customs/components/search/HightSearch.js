import React, { Component } from 'react';
import { Form, DatePicker } from 'antd';
const FormItem = Form.Item;
const { RangePicker } = DatePicker;

import StandardFormRow from '../../../../../components/StandardFormRow';

class HightSearch extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="height-search">
                <StandardFormRow title="创建时间：">
                    <FormItem>
                        {getFieldDecorator('createTime')(
                            <RangePicker />
                        )}
                    </FormItem>
                </StandardFormRow>
                <StandardFormRow title="制单时间：">
                    <FormItem>
                        {getFieldDecorator('ordersTime')(
                            <RangePicker />
                        )}
                    </FormItem>
                </StandardFormRow>
                <StandardFormRow title="审核时间：">
                    <FormItem>
                        {getFieldDecorator('auditTime')(
                            <RangePicker />
                        )}
                    </FormItem>
                </StandardFormRow>
            </div>
        );
    }
}

export default HightSearch;
import React, { Component } from 'react';
import { Form, Radio, Input } from 'antd';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

import StandardFormRow from '../../../../../components/StandardFormRow';

class TextSearch extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="text-search">
                <StandardFormRow title="搜索类型：">
                    <FormItem>
                        {getFieldDecorator('searchType', {
                            rules: [{ required: false, message: '请选择' }],
                            initialValue: '1',
                        })(
                            <RadioGroup size="small">
                                <RadioButton value="1">合同号</RadioButton>
                                <RadioButton value="2">物流计划单号</RadioButton>
                                <RadioButton value="3">报关单号</RadioButton>
                                <RadioButton value="4">制单人</RadioButton>
                                <RadioButton value="5">审核人</RadioButton>
                            </RadioGroup>
                        )}
                    </FormItem>
                </StandardFormRow>
                <StandardFormRow title="搜索内容：">
                    <FormItem>
                        {getFieldDecorator('searchContent')(
                            <TextArea placeholder="支持多个搜索条件换行精确搜索" style={{ width: 344 }} autosize={{ minRows: 2, maxRows: 6 }} />
                        )}
                    </FormItem>
                </StandardFormRow>
            </div>
        );
    }
}

export default TextSearch;
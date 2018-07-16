import React, { Component } from 'react';
import { Form, Radio, Input, Button } from 'antd';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

import StandardFormRow from '../../../../../components/StandardFormRow';

class Organize extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="search breadcrumb padding-sm overflow-hidden margin-md-left">
                <div className="text-search">
                    <StandardFormRow title="搜索类型：">
                        <FormItem>
                            {getFieldDecorator('searchType', {
                                rules: [{ required: false, message: '请选择' }],
                                initialValue: '1',
                            })(
                                <RadioGroup size="small">
                                    <RadioButton value="1">姓名</RadioButton>
                                    <RadioButton value="2">工号</RadioButton>
                                    <RadioButton value="3">手机号</RadioButton>
                                </RadioGroup>
                            )}
                        </FormItem>
                    </StandardFormRow>
                    <StandardFormRow title="搜索内容：">
                        <FormItem>
                            {getFieldDecorator('searchContent')(
                                <TextArea placeholder="支持多个搜索条件换行精确搜索" style={{ width: 344 }} autosize={{ minRows: 2, maxRows: 6 }} />
                            )}
                            <Button type="primary" className="margin-md-left" htmlType="submit">搜索</Button>
                        </FormItem>
                    </StandardFormRow>
                </div>
            </div>
        );
    }
}

export default Organize;
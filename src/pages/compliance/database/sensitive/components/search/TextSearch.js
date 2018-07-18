import React, { Component } from 'react';
import { Form, Radio, Input } from 'antd';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import StandardFormRow from '../../../../../../components/StandardFormRow';

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
                                <RadioButton value="1">敏感词</RadioButton>
                                <RadioButton value="2">商标号</RadioButton>
                                <RadioButton value="3">权利人</RadioButton>
                            </RadioGroup>
                        )}
                    </FormItem>
                </StandardFormRow>
                <StandardFormRow title="搜索内容：">
                    <FormItem>
                        {getFieldDecorator('searchContent')(
                            <Input placeholder="支持模糊搜索" style={{ width: 344 }} />
                        )}
                    </FormItem>
                </StandardFormRow>
            </div>
        );
    }
}

export default TextSearch;
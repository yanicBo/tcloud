import React, { Component } from 'react';
import { Form, Radio, Checkbox  } from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

import {fields} from '../../../data/field';

class App extends Component {
    onChangeType = (e) => {
        console.log(e)
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
        };
        const plainOptions = ['Apple', 'Pear', 'Orange'];
        const defaultCheckedList = ['Apple', 'Orange'];
        return (
            <div className="tcloud-export">
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="导出类型"
                    >
                        {getFieldDecorator('type', {
                            initialValue: 2,
                            rules: [{
                                required: true, message: '请选择导出类型.'
                            }],
                        })(
                            <RadioGroup onChange={this.onChangeType}>
                                <Radio value={1}>导出选中的数据</Radio>
                                <Radio value={2}>导出当前搜索条件下的数据</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="导出字段"
                    >
                        <Checkbox
                            indeterminate={true}
                            onChange={this.onCheckAllChange}
                            checked={false}
                        >
                            全选
                        </Checkbox>
                        {getFieldDecorator('field', {
                            initialValue: fields,
                            rules: [{
                                required: true, message: '请选择导出类型.'
                            }],
                        })(
                            <CheckboxGroup options={fields} onChange={this.onChange} />
                        )}
                    </FormItem>
                </Form>
            </div >
        );
    }
}

export default Form.create()(App);
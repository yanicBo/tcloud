import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

import { nature, types, enable } from '../../data';

class Detail extends Component {
    formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="newp-w-modal">
                <Form>
                    <FormItem
                        {...this.formItemLayout}
                        label="仓库编码"
                    >
                        {getFieldDecorator('code', {
                            rules: [{
                                required: true, message: '请输入仓库编码.',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...this.formItemLayout}
                        label="仓库名称"
                    >
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: '请输入仓库名称.',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...this.formItemLayout}
                        label="仓库性质"
                    >
                        {getFieldDecorator('nature', {
                            rules: [
                                { required: true, message: '请选择仓库性质' },
                            ],
                        })(
                            <Select placeholder="请选择">
                                {
                                    nature.map((item, index) => (
                                        <Option value={item.id} key={index}>{item.name}</Option>
                                    ))
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...this.formItemLayout}
                        label="仓库分类"
                    >
                        {getFieldDecorator('type', {
                            rules: [
                                { required: true, message: '请选择仓库分类' },
                            ],
                        })(
                            <Select placeholder="请选择">
                                {
                                    types.map((item, index) => (
                                        <Option value={item.id} key={index}>{item.name}</Option>
                                    ))
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...this.formItemLayout}
                        label="国家"
                    >
                        {getFieldDecorator('country')(
                            <Select showSearch placeholder="请选择">
                                {
                                    types.map((item, index) => (
                                        <Option value={item.id} key={index}>{item.name}</Option>
                                    ))
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...this.formItemLayout}
                        label="负责人"
                    >
                        {getFieldDecorator('director')(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...this.formItemLayout}
                        label="地址"
                    >
                        {getFieldDecorator('address')(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...this.formItemLayout}
                        label="启用状态"
                    >
                        {getFieldDecorator('state', {
                            rules: [{
                                required: true, message: '请选择启用状态.',
                            }],
                        })(
                            <Select placeholder="请选择">
                                {
                                    enable.map((item, index) => (
                                        <Option value={item.id} key={index}>{item.name}</Option>
                                    ))
                                }
                            </Select>
                        )}
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Form.create()(Detail);
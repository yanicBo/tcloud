import React, { Component } from 'react';
import { Input, Form, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

import { grade } from '../../../data';
import { getPlatform, getCountry, getTrademark } from '../../../data';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            platform: [],   // 销售平台
            country: [],    // 国家
            trademark: []
        };
        getPlatform().then((result) => {
            this.setState({ platform: result })
        });
        getCountry().then((result) => {
            this.setState({ country: result })
        });
        getTrademark().then((result) => {
            this.setState({ trademark: result })
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { platform, country, trademark } = this.state;

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        return (
            <div className="sensitive-detail">
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="敏感词"
                    >
                        {getFieldDecorator('sensitive', {
                            rules: [{
                                required: true, message: '请输入敏感词.',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="敏感等级"
                    >
                        {getFieldDecorator('sensitivityGrade', {
                            rules: [{
                                required: true, message: '请选择敏感等级.',
                            }],
                        })(
                            <Select placeholder="请选择">
                                {
                                    grade.map((item, index) => {
                                        if (item.id !== 0) {
                                            return (
                                                <Option key={index} value={item.id}>{item.name}</Option>
                                            )
                                        }
                                    })


                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="国家"
                    >
                        {getFieldDecorator('country', {
                            rules: [{
                                required: true, message: '请选择国家，支持多选.',
                            }],
                        })(
                            <Select
                                mode="multiple"
                                placeholder="请选择"
                            >
                                {
                                    country.map((item, index) => {
                                        if (item.id !== 0) {
                                            return (
                                                <Option key={index} value={item.id}>{item.name}</Option>
                                            )
                                        }
                                    })


                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="商标类别"
                    >
                        {getFieldDecorator('trademark', {
                            rules: [{
                                required: true, message: '请选择商标类别，支持多选.',
                            }],
                        })(
                            <Select
                                mode="multiple"
                                placeholder="请选择"
                            >
                                {
                                    trademark.map((item, index) => {
                                        if (item.id !== 0) {
                                            return (
                                                <Option key={index} value={item.id}>{item.name}</Option>
                                            )
                                        }
                                    })
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="禁售平台"
                    >
                        {getFieldDecorator('salePlatform')(
                            <Select
                                mode="multiple"
                                placeholder="请选择"
                            >
                                {
                                    platform.map((item, index) => {
                                        if (item.id !== 0) {
                                            return (
                                                <Option key={index} value={item.id}>{item.name}</Option>
                                            )
                                        }
                                    })
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="权利人"
                    >
                        {getFieldDecorator('obligee')(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="商标号"
                    >
                        {getFieldDecorator('trademarkNumber')(
                            <Input />
                        )}
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Form.create()(Detail);
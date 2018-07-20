import React, { Component } from 'react';
import { Input, Form, Select, Divider  } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

import { grade } from '../../../data';
import { getPlatform, getCountry, getTrademark, active } from '../../../data';

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
            <div className="reptilian-detail">
                <Form>
                    <Divider orientation="left">配置参数</Divider>
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
                        label="国家"
                    >
                        {getFieldDecorator('country')(
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
                        label="活跃状态"
                    >
                        {getFieldDecorator('activeState')(
                            <Select placeholder="请选择">
                                {
                                    active.map((item, index) => {
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
                        {getFieldDecorator('trademark')(
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
                        label="商标词"
                    >
                        {getFieldDecorator('sensitive')(
                            <Input />
                        )}
                    </FormItem>
                    <Divider orientation="left">信息归类</Divider>
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
                    
                </Form>
            </div>
        );
    }
}

export default Form.create()(Detail);
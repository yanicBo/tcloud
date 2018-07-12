import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

import { req, setCookie } from '../../utils';
import { config, paramType, path } from '../../configs';

const FormItem = Form.Item;

class Login extends Component {
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                req.http(path.urc + 'login', values, paramType.map).then(data => {
                    message.success('登录成功.');
                    setCookie('ticket', data.data.ticket);
                    setCookie('username', data.data.userName);
                    location.href = location.href;
                }) 
            }
        });
    }

    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: '请输入用户名'}],
                        })(
                            <Input prefix={<Icon type="user"/>} placeholder="请输入您的用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('pwd', {
                            rules: [{required: true, message: '请输入密码'}],
                        })(
                            <Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入您的密码" />
                        )}

                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <Link to='forgetPwd'className="login-form-forgot pull-right">忘记密码</Link>
                        <Button type="primary" size='large' htmlType="submit" className="login-form-button ant-btn-block">
                            登 录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Form.create()(Login);
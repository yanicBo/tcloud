import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logout from '../layout/logout'
import { LocaleProvider,Layout, Menu }   from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

import zhCN from "antd/lib/locale-provider/zh_CN";
import Login from "../login/login";
import ForgetPwd from "../login/forget_pwd";

import './login.css';

class LoginRouter extends Component {
    render () {
        return (
            <LocaleProvider locale={zhCN}>
                <Logout>
                    <Switch>
                        <Route exact={true}  path='/' component={ Login } />
                        <Route path='/forgetPwd' component={ ForgetPwd } />
                    </Switch>
                </Logout>
            </LocaleProvider>
        )
    }
}
export default LoginRouter;
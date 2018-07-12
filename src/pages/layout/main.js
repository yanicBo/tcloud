import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, LocaleProvider, Breadcrumb } from 'antd';
import zhCN from "antd/lib/locale-provider/zh_CN";
const { Content } = Layout;

import Header from "./header";
import { menuMain } from "../../routers/menu";
import Router from "../../routers/index";

import { req, setCookie } from '../../utils';
import { path } from '../../configs';

import './layout.css';


class MainRouter extends Component {

    componentWillMount() {
        this.getMenuData();
    }

    getMenuData = () => {
        req.http(path.urc + 'getAllFuncPermit', {}).then(data => {
            setCookie('funcVersion', data.data.funcVersion);
        }) 
    }

    render() {
        
        return (
            <LocaleProvider locale={zhCN}>
                <Layout>
                    <Header menu={menuMain} />
                    <Layout>
                        <Content className="main-content">
                            <Router />
                        </Content>
                    </Layout>
                </Layout>
            </LocaleProvider>
        )
    }
}
export default MainRouter;
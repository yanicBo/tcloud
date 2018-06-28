import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, LocaleProvider, Breadcrumb } from 'antd';
import zhCN from "antd/lib/locale-provider/zh_CN";
const { Content } = Layout;

import Header from "./header";
import { menuMain } from "../../routers/menu";
import Router from "../../routers/index";

import './layout.css';


class MainRouter extends Component {

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
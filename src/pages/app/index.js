import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

import Side from '../layout/side';
import Mbx from '../../components/Mbx';
import { menu } from "./routers/menu";
import Router from './routers';

class App extends Component {
    render() {
        return (
            <Layout>
                <Side menu={menu} />
                <Layout className="main-layout">
                    <Content>
                        <Mbx/>
                        <Router />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default App;



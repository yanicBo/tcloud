import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Spin } from 'antd';
import Bundle from '../components/bundle';

// 首页
const Home = (props) => (
    <Bundle load={() => import('../pages/home')}>
        {
            (Home) => Home ? <Home {...props} /> : <div className="loading"><Spin size="large" /></div>
        }
    </Bundle>
);
// 订单管理
const Oms = (props) => (
    <Bundle load={() => import('../pages/oms')}>
        {
            (Oms) => Oms ? <Oms {...props} /> : <div className="loading"><Spin size="large" /></div>
        }
    </Bundle>
);
// 物流管理
const Lgt = (props) => (
    <Bundle load={() => import('../pages/logistics')}>
        {
            (Lgt) => Lgt ? <Lgt {...props} /> : <div className="loading"><Spin size="large" /></div>
        }
    </Bundle>
);
// 应用中心
const App = (props) => (
    <Bundle load={() => import('../pages/app')}>
        {
            (App) => App ? <App {...props} /> : <div className="loading"><Spin size="large" /></div>
        }
    </Bundle>
);

const RootRouter = (props) => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/oms" render={() => <Oms />} />
            <Route path="/logistics/customs/list" render={() => <Lgt />} />
            <Route path="/app" render={() => <App />} />
        </Switch>
    )
};

export default RootRouter;

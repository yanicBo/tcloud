import React, { Component }from 'react';
import { Switch, Route } from "react-router-dom";
import { Spin } from 'antd';
import Bundle from '../../../components/bundle';

// 速卖通订单
const Home = (props) => (
    <Bundle load={() => import('../home')}>
        {
            (Home) => Home ? <Home {...props} /> : <div className="loading"><Spin size="large"/></div>
        }
    </Bundle>
);

// 速卖通订单
const Smt = (props) => (
    <Bundle load={() => import('../platform/smt')}>
        {
            (Smt) => Smt ? <Smt {...props} /> : <div className="loading"><Spin size="large"/></div>
        }
    </Bundle>
);

const OmsRouter = () => {
    return (
        <div>
            <Route exact path="、tcloud/oms" render={() => <Home/> }/>
            <Route path="/tcloud/oms/platform/smt" render={() => <Smt/> }/>
        </div>
    )
};

export default OmsRouter;

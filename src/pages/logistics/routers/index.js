import React, { Component }from 'react';
import { Route } from "react-router-dom";
import { Spin } from 'antd';
import Bundle from '../../../components/bundle';

// 报关单
const Customs = (props) => (
    <Bundle load={() => import('../customs')}>
        {
            (Customs) => Customs ? <Customs {...props} /> : <div className="loading"><Spin size="large"/></div>
        }
    </Bundle>
);

const Router = () => {
    return (
        <div>
            <Route exact path="/logistics" render={() => <Customs/> }/>
            <Route exact path="/logistics/customs/list" render={() => <Customs/> }/>
        </div>
    )
};

export default Router;

import React, { Component }from 'react';
import { Route } from "react-router-dom";
import { Spin } from 'antd';
import Bundle from '../../../components/bundle';

// 报关单
const Customs = (props) => (
    <Bundle load={() => import('../customs/list')}>
        {
            (Customs) => Customs ? <Customs {...props} /> : <div className="loading"><Spin size="large"/></div>
        }
    </Bundle>
);

// 待制单
const Make = (props) => (
    <Bundle load={() => import('../customs/make')}>
        {
            (Make) => Make ? <Make {...props} /> : <div className="loading"><Spin size="large"/></div>
        }
    </Bundle>
);

const Router = () => {
    return (
        <div className="padding-md">
            <Route exact path="/logistics" render={() => <Customs/> }/>
            <Route exact path="/logistics/customs/list" render={() => <Customs/> }/>
            <Route exact path="/logistics/customs/list/make/:id" render={() => <Make/> }/>
        </div>
    )
};

export default Router;

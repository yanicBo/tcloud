import React, { Component }from 'react';
import { Route } from "react-router-dom";
import { Spin } from 'antd';
import Bundle from '../../../components/bundle';

// 报关单
const Authorization = (props) => (
    <Bundle load={() => import('../authorization')}>
        {
            (Authorization) => Authorization ? <Authorization {...props} /> : <div className="loading"><Spin size="large"/></div>
        }
    </Bundle>
);

const OmsRouter = () => {
    return (
        <div>
            <Route exact path="/app" render={() => <Authorization/> }/>
            <Route path="/app/authorization/smt" render={() => <Authorization/> }/>
        </div>
    )
};

export default OmsRouter;

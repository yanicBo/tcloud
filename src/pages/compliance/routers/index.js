import React, { Component }from 'react';
import { Route } from "react-router-dom";
import { Spin } from 'antd';
import Bundle from '../../../components/bundle';

// 敏感词库
const Sensitive = (props) => (
    <Bundle load={() => import('../database/sensitive')}>
        {
            (Sensitive) => Sensitive ? <Sensitive {...props} /> : <div className="loading"><Spin size="large"/></div>
        }
    </Bundle>
);

const OmsRouter = () => {
    return (
        <div className="padding-md">
            <Route exact path="/compliance" render={() => <Sensitive/> }/>
            <Route exact path="/compliance/database" render={() => <Sensitive/> }/>
            <Route exact path="/compliance/database/sensitive" render={() => <Sensitive/> }/>
        </div>
    )
};

export default OmsRouter;

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

// 爬虫抓取
const Reptilian = (props) => (
    <Bundle load={() => import('../database/reptilian')}>
        {
            (Reptilian) => Reptilian ? <Reptilian {...props} /> : <div className="loading"><Spin size="large"/></div>
        }
    </Bundle>
);

const OmsRouter = () => {
    return (
        <div className="padding-md">
            <Route exact path="/compliance" render={() => <Sensitive/> }/>
            <Route exact path="/compliance/database" render={() => <Sensitive/> }/>
            <Route exact path="/compliance/database/sensitive" render={() => <Sensitive/> }/>
            <Route exact path="/compliance/database/sensitive/reptilian" render={() => <Reptilian/> }/>
        </div>
    )
};

export default OmsRouter;

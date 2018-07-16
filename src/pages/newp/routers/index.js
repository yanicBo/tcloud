import React, { Component }from 'react';
import { Route } from "react-router-dom";
import { Spin } from 'antd';
import Bundle from '../../../components/bundle';

// 仓库关系
const Warehouse = (props) => (
    <Bundle load={() => import('../warehouse')}>
        {
            (Warehouse) => Warehouse ? <Warehouse {...props} /> : <div className="loading"><Spin size="large"/></div>
        }
    </Bundle>
);

const Router = () => {
    return (
        <div className="padding-md">
            <Route exact path="/tcloud/newp" breadcrumbName="" render={() => <Warehouse/> }/>
            <Route exact path="/tcloud/newp/basics" breadcrumbName="" render={() => <Warehouse/> }/>
            <Route exact path="/tcloud/newp/basics/warehouse" breadcrumbName="" render={() => <Warehouse/> }/>
        </div>
    )
};

export default Router;

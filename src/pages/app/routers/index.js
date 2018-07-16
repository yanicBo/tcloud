import React, { Component }from 'react';
import { Route } from "react-router-dom";
import { Spin } from 'antd';
import Bundle from '../../../components/bundle';

// 报关单
const Organize = (props) => (
    <Bundle load={() => import('../urc/organize')}>
        {
            (Organize) => Organize ? <Organize {...props} /> : <div className="loading"><Spin size="large"/></div>
        }
    </Bundle>
);

const OmsRouter = () => {
    return (
        <div className="padding-md">
            <Route exact path="/app" render={() => <Organize/> }/>
            <Route exact path="/app/urc" render={() => <Organize/> }/>
            <Route exact path="/app/urc/organize" render={() => <Organize/> }/>
        </div>
    )
};

export default OmsRouter;

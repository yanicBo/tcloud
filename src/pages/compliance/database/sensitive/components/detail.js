import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';

import StandardItemRow from '../../../../../components/StandardItemRow';
import { useState, active, grade } from '../../../data';
import { getStateName, timestampFromat } from '../../../../../utils';

class App extends Component {
    render() {
        const { item } = this.props;
        return (
            <div>
                <Divider orientation="left">基本信息</Divider>
                <Row gutter={24}>
                    <Col span={12}>
                        <StandardItemRow title="敏感词：">
                            { item.sensitive }
                        </StandardItemRow>
                    </Col>
                    <Col span={12}>
                        <StandardItemRow title="敏感等级：">
                        {getStateName(item.sensitivityGrade, grade)}
                        </StandardItemRow>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <StandardItemRow title="活跃状态：">
                        {getStateName(item.activeState, active)}
                        </StandardItemRow>
                    </Col>
                    <Col span={12}>
                        <StandardItemRow title="在用状态：">
                        {getStateName(item.useState, useState)}
                        </StandardItemRow>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <StandardItemRow title="禁售平台：">
                            { item.salePlatform }
                        </StandardItemRow>
                    </Col>
                    <Col span={12}>
                        <StandardItemRow title="国家：">
                            { item.country }
                        </StandardItemRow>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <StandardItemRow title="商标类别：">
                            { 
                                item.trademark.map((item, index) => (
                                    <span key={index}>{item.name}；</span>
                                ))
                            }
                        </StandardItemRow>
                    </Col>
                    <Col span={12}>
                        <StandardItemRow title="权利人：">
                            { item.obligee }
                        </StandardItemRow>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <StandardItemRow title="商标号：">
                            { item.trademarkNumber }
                        </StandardItemRow>
                    </Col>
                    <Col span={12}>
                        <StandardItemRow title="数据来源：">
                            { item.source }
                        </StandardItemRow>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <StandardItemRow title="图片：">
                            <a href={item.img} target="_blank">查看</a>
                        </StandardItemRow>
                    </Col>
                    <Col span={12}>
                        <StandardItemRow title="图片类别：">
                            { item.imgType }
                        </StandardItemRow>
                    </Col>
                </Row>
                <Divider orientation="left">日志信息</Divider>
                <Row gutter={24}>
                    <Col span={12}>
                        <StandardItemRow title="添加人员：">
                        { item.additions }
                        </StandardItemRow>
                    </Col>
                    <Col span={12}>
                        <StandardItemRow title="添加时间：">
                            { timestampFromat(item.addTime, 'yyyy-mm-dd hh:MM:ss') }
                        </StandardItemRow>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <StandardItemRow title="修改人员：">
                        { item.editions }
                        </StandardItemRow>
                    </Col>
                    <Col span={12}>
                        <StandardItemRow title="修改时间：">
                        { timestampFromat(item.editTime, 'yyyy-mm-dd hh:MM:ss') }
                        </StandardItemRow>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
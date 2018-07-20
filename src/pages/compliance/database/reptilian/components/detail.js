import React, { Component } from 'react';
import { Row, Col } from 'antd';

import StandardItemRow from '../../../../../components/StandardItemRow';
import { active } from '../../../data';
import { getStateName } from '../../../../../utils';

class App extends Component {
    render() {
        const { item } = this.props;
        return (
            <div>
                <Row gutter={24}>
                    <Col span={24}>
                        <StandardItemRow title="权利人：">
                            { item.obligee }
                        </StandardItemRow>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <StandardItemRow title="国家：">
                            {
                                item.country.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            }
                        </StandardItemRow>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <StandardItemRow title="活跃状态：">
                            { getStateName(item.activeState, active) }
                        </StandardItemRow>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <StandardItemRow title="商标类别：">
                            {
                                item.trademarkName.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            }
                        </StandardItemRow>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <StandardItemRow title="商标词：">
                            { item.sensitive }
                        </StandardItemRow>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
import moment from 'moment';
import EditAbale from '../../../../../components/EditAbale';
import EditDatePicker from '../../../../../components/EditDatePicker'

class Contract extends Component {
    onCellChange = (key, name) => {

    }
    render() {
        return (
            <Form>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="Quality standard"
                            value={"YKS Standard"}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="Warranty"
                            value={"YKS Standard"}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="Payment terms"
                            value={"TT 60DAYS"}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="Payment"
                            value={"TT 60DAYS"}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="Beneficiary"
                            value={"ShenzhenYoukeshu Technology Co.,Ltd."}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="Beneficiary Bank"
                            value={"中国建设银行深圳华南城支"}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="SWIFT Code"
                            value={"PCBCCNBJSZX"}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="Account No"
                            value={"44201018800052500000"}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="Intermediary Bank"
                            value={"ShenzhenYoukeshu Technology Co.,Ltd."}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="The Seller"
                            value={"中国建设银行深圳华南城支"}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="The Buyer"
                            value={"YKS Electronic Commerce Co., Limited"}
                            isEdit={true}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Contract;
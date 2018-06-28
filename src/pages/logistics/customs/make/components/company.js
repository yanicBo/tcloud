import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
import EditAbale from '../../../../../components/EditAbale';

class Campany extends Component {
    onCellChange = (key, name) => {

    }
    render() {


        return (
            <Form>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="申报日期"
                            value={"2018-06-28 12:12:34"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="联系人"
                            value={"杨波"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="手机号码"
                            value={"15879187716"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="开票方"
                            value={"Shenzhen YoukeshuTechnology Co.,Ltd."}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="公司地址"
                            value={"深圳市南山区前海路丽湾大厦1909"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="电话号码"
                            value={"0755-88888888"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>

                    <Col span={6}>
                        <EditAbale
                            title="Email"
                            value={"youkeshu@youkeshu.com"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="付款方"
                            value={"YKS Electronic Commerce Co., Limited"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="公司地址"
                            value={"Unit906-907,9/f,The octagon,Tsuen Wan ,Hong Kong"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="电话号码"
                            value={"0755-88888888"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="Email"
                            value={"youkeshu@youkeshu.com"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="收发货人"
                            value={"深圳市有棵树科技股份有限公司 4403160HT6"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="生产销售单位"
                            value={"深圳市有棵树科技股份有限公司 4403160HT6"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Campany;
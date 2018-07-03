import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
import moment from 'moment';

import EditAbale from '../../../../../components/EditAbale';
import EditDatePicker from '../../../../../components/EditDatePicker';
import EditSelect from '../../../../../components/EditSelect';


class Customs extends Component {
    onCellChange = (key, name) => {

    }
    render() {
        return (
            <Form>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="预录入编号"
                            isEdit={false}
                            value={"RAP123456789"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditDatePicker
                            classs="tcloud-required"
                            title="出口日期"
                            value={moment('2015-01-01', 'YYYY-MM-DD')}
                            format="YYYY-MM-DD"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="申报单位"
                            isEdit={false}
                            value={"深圳市有棵树股份科技有限公司"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="录入员"
                            isEdit={true}
                            value={"杨波"}
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="录入单位"
                            isEdit={false}
                            value={"深圳市有棵树股份科技有限公司"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="报关人员"
                            isEdit={false}
                            value={"杨波"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="申明"
                            isEdit={false}
                            value={"ABC的风格"}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="海关编号"
                            isEdit={false}
                            value={"4403160HT6"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditSelect
                            classs="tcloud-required"
                            title="出口口岸"
                            value="5549"
                            name="大鹏海关"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="合同协议号"
                            isEdit={false}
                            value={"SC012018040810"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="发票号"
                            isEdit={false}
                            value={"SC012018040810"}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="备案号"
                            isEdit={false}
                            value={"SC012018040810"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditSelect
                            classs="tcloud-required"
                            title="运输方式"
                            value="5549"
                            name="大鹏海关"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="运输工具"
                            isEdit={false}
                            value={"SC012018040810"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="提运单号"
                            isEdit={true}
                            value={"HJdsf7879090"}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="合同签约地点"
                            isEdit={true}
                            value={"深圳"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="批准文号"
                            isEdit={false}
                            value={"1234324324"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="税务登记号"
                            isEdit={false}
                            value={"1234324324"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="装运期"
                            isEdit={false}
                            value={"2019-09-09"}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="集装箱号"
                            isEdit={true}
                            value={"sdfs34324"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="封号"
                            isEdit={true}
                            value={"sdfs34324"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="许可证号"
                            isEdit={false}
                            value={"sdfs34324"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditSelect
                            classs="tcloud-required"
                            title="原厂国"
                            value="5549"
                            name="China"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditDatePicker
                            classs="tcloud-required"
                            title="合同签约时间"
                            value={moment('2015-01-01', 'YYYY-MM-DD')}
                            format="YYYY-MM-DD"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="特殊关系确认"
                            isEdit={false}
                            value={"否"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="价格影响确认"
                            isEdit={false}
                            value={"否"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="支付特许权使用费确认"
                            isEdit={false}
                            value={"否"}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditSelect
                            classs="tcloud-required"
                            title="征免"
                            value="5549"
                            name="大鹏海关"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditSelect
                            classs="tcloud-required"
                            title="目的国"
                            value="5549"
                            name="China"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="发票来源"
                            isEdit={false}
                            value={"hushuobadao"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="备注信息"
                            isEdit={false}
                            value={"hellohellohellohellohello"}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditSelect
                            classs="tcloud-required"
                            title="贸易国"
                            value="5549"
                            name="China"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditSelect
                            classs="tcloud-required"
                            title="始发国"
                            value="5549"
                            name="China"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="指运港"
                            isEdit={true}
                            value={"招商蛇口"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            classs="tcloud-required"
                            title="境内货源地"
                            isEdit={true}
                            value={"快捷快递时间分"}
                        />
                    </Col>
                </Row>
                
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="外汇币值"
                            isEdit={false}
                            value={"USD"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="生产厂家"
                            isEdit={false}
                            value={"艾迪达斯"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditSelect
                            classs="tcloud-required"
                            title="监管方式"
                            value="5549"
                            name="大鹏海关"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                    <Col span={6}>
                        <EditSelect
                            classs="tcloud-required"
                            title="征免性质"
                            value="5549"
                            name="大鹏海关"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="成交方式"
                            isEdit={false}
                            value={"FOB"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="运费"
                            isEdit={false}
                            value={"0.00"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="保险费"
                            isEdit={false}
                            value={"0.00"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="杂费"
                            isEdit={false}
                            value={"0.00"}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditSelect
                            classs="tcloud-required"
                            title="包装种类"
                            value="5549"
                            name="大鹏海关"
                            onChange={this.onCellChange('aaaaa', 'name')}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <EditAbale
                            title="随附单证号"
                            isEdit={true}
                            value={"FOB"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="备注"
                            isEdit={false}
                            value={"FOB"}
                        />
                    </Col>
                    <Col span={6}>
                        <EditAbale
                            title="标记唛头"
                            isEdit={false}
                            value={"FOB"}
                        />
                    </Col>
                </Row>
                <Row gutter={24}>
                    
                    <Col span={6}>
                        <EditAbale
                            title="商标"
                            isEdit={false}
                            value={"FOB"}
                        />
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Customs;
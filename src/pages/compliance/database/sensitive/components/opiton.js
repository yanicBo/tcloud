import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';

import Modal from '../../../../../components/Modal';
import Detail from './addEdit';

class Option extends Component {
    state = {
        visible: false
    }
    // 确定
    handleOk = (e) => {
        this.refs.form.validateFields((err, values) => {
            if (!err) {
                req.http('newp/detail', values).then(data => {
                    message.success('操作成功.');
                    this.setState({
                        visible: false
                    });
                })
            }
        });
        
    }
    // 打开弹窗
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    // 取消
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="1">批量还原</Menu.Item>
                <Menu.Item key="2">批量删除</Menu.Item>
            </Menu>
        );
        const { visible } = this.state;
        return (
            <div className="option">
                <div className="pull-left">
                    <Dropdown overlay={menu}>
                        <Button>
                            批量操作 <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
                <div className="pull-right">
                    <Modal
                        component={(<Detail ref="form" />)}
                        btnName="新增词库"
                        title="新增词库"
                        iconType="plus"
                        btnType="button"
                        visible={visible}
                        showModal={this.showModal}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                    <Button className="margin-xm-right"><Icon type="download" style={{ fontSize: 16 }} /> 数据导入</Button>
                    <Button className="margin-xm-right"><Icon type="export" style={{ fontSize: 16 }} /> 数据导出</Button>
                    <Button><Icon type="api" style={{ fontSize: 16 }} /> 爬虫抓取</Button>
                </div>
            </div>
        );
    }
}

export default Option;
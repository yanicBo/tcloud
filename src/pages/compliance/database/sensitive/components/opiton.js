import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu, Icon } from 'antd';

import Modal from '../../../../../components/Modal';
import Detail from './addEdit';
import Import from '../../../../../components/Import';
import Export from './export';

class Option extends Component {
    state = {
        addVisible: false,
        importVisible: false,
        exportVisible: false,
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
    showModal = (name) => {
        this.setState({
            [name]: true,
        });
    };

    // 取消
    handleCancel = (name) => {
        this.setState({
            [name]: false,
        });
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="1">批量还原</Menu.Item>
                <Menu.Item key="2">批量删除</Menu.Item>
            </Menu>
        );
        const { addVisible, importVisible, exportVisible  } = this.state;
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
                        visible={addVisible}
                        showModal={() => this.showModal('addVisible')}
                        handleOk={this.handleOk}
                        handleCancel={() => this.handleCancel('addVisible')}
                    />
                    <Modal
                        component={(<Import />)}
                        btnName="数据导入"
                        title="敏感词导入"
                        iconType="download"
                        btnType="button"
                        visible={importVisible}
                        showModal={() => this.showModal('importVisible')}
                        handleOk={this.handleOk}
                        handleCancel={() => this.handleCancel('importVisible')}
                        footer={true}
                    />
                    <Modal
                        component={(<Export />)}
                        btnName="数据导出"
                        title="数据导出"
                        iconType="export"
                        btnType="button"
                        visible={exportVisible}
                        showModal={() => this.showModal('exportVisible')}
                        handleOk={this.handleOk}
                        handleCancel={() => this.handleCancel('exportVisible')}
                    />
                    <Link className="ant-btn margin-sm-left" to="/compliance/database/sensitive/reptilian"><Icon type="api" style={{ fontSize: 16 }} /> 爬虫抓取</Link>
                </div>
            </div>
        );
    }
}

export default Option;
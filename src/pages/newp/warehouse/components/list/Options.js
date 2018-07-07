import React, { Component } from 'react';
import { message } from 'antd';
import Modal from '../../../../../components/Modal';
import Detail from '../detail';
import Popconfirm from '../../../../../components/Popconfirm';
import { req } from '../../../../../utils/http';
require('../../../mock/detail')

class Options extends Component {
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

    // 取消弹框
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    // 启用禁用
    onConfirm = (e) => {
        req.http('newp/detail', {}).then((data) => {
            message.success('操作成功.')
        })
    };

    render() {
        const { item } = this.props;
        const btnName = item.state === 1 ? "禁用" : "启用";
        const { visible } = this.state;
        return (
            <div className="options-style">
                <div className="inline-block">
                    <Modal
                        component={(<Detail ref="form" />)}
                        btnName="编辑" 
                        title="修改仓库设置"
                        btnType="font"
                        visible={visible}
                        showModal={this.showModal}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                </div>
                <div className="inline-block">
                    <Popconfirm
                        btnName={btnName}
                        text={`确定要${btnName}该项?`}
                        onConfirm={this.onConfirm}
                    />
                </div>
            </div>
        );
    }
}

export default Options;
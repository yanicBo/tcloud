import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import Modal from '../../../../../components/Modal';
import Detail from './add';

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
        const {visible} = this.state;
        return (
            <div className="option">
                <div className="pull-left">
                    <Link to="/compliance/database/sensitive" className="ant-btn"><Icon type="arrow-left" /> 返回词库</Link>
                </div>
                <div className="pull-right">
                    <Modal
                        component={(<Detail ref="form" />)}
                        btnName="爬虫参数配置"
                        title="爬虫参数配置"
                        iconType="tool"
                        btnType="button"
                        visible={visible}
                        showModal={() => this.showModal('visible')}
                        handleOk={this.handleOk}
                        handleCancel={() => this.handleCancel('visible')}
                    />
                </div>
            </div>
        );
    }
}

export default Option;
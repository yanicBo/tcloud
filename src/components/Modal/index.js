import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import './index.css';

class App extends Component {
    state = {
        visible: false
    }

    // 打开弹窗
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    // 确定
    handleOk = () => {
        this.setState({
            visible: false
        });
    }

    // 取消
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    // 判断按钮类型
    btnType = (btnType, btnName, iconType) => {
        if (btnType === "button") {
            return (
                <Button onClick={this.showModal}>
                    <Icon type={iconType} style={{ fontSize: 16 }} />
                    {btnName}
                </Button>
            )
        } else if (btnType === "font") {
            return (
                <span className="btn-name" onClick={this.showModal}>
                    {btnName}
                </span>
            )
        } else {
            return null;;
        }
    }

    render() {
        const { visible } = this.state;
        const { btnName, component, title, iconType, btnType } = this.props;
        return (
            <div className="tcloud-modal">
                {this.btnType(btnType, btnName, iconType)}
                <Modal
                    maskClosable={false}
                    title={title}
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div>
                        {component}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default App;
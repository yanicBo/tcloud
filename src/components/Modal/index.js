import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import './index.css';

class App extends Component {

    // 判断按钮类型
    btnType = (btnType, btnName, iconType, showModal) => {
        if (btnType === "button") {
            return (
                <Button onClick={showModal}>
                    <Icon type={iconType} style={{ fontSize: 16 }} />
                    {btnName}
                </Button>
            )
        } else if (btnType === "font") {
            return (
                <span className="btn-name" onClick={showModal}>
                    {btnName}
                </span>
            )
        } else {
            return null;;
        }
    }

    render() {
        const { btnName, component, title, iconType, btnType, handleOk, visible, showModal, handleCancel } = this.props;
        return (
            <div className="tcloud-modal">
                {this.btnType(btnType, btnName, iconType, showModal)}
                <Modal
                    maskClosable={false}
                    title={title}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
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
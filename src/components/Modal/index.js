import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import './index.css';

class App extends Component {

    // 判断按钮类型
    btnType = () => {
        const { btnName, iconType, btnType, showModal } = this.props;
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

    modalType = () => {
        const { component, title, handleOk, visible, handleCancel } = this.props;
        if (this.props.footer === true) {
            return (
                <Modal
                    maskClosable={false}
                    title={title}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <div>
                        {component}
                    </div>
                </Modal>
            )
        } else {
            return (
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
            )
        }
    }

    render() {
        
        return (
            <div className="tcloud-modal">
                {this.btnType()}
                {this.modalType()}
            </div>
        );
    }
}

export default App;
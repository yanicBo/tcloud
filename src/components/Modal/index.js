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

    render() {
        const { visible } = this.state;
        const { btnName, html, title, type } = this.props;
        return (
            <div className="">
                <div className="tcloud-modal">
                    <Button onClick={this.showModal}>
                        <Icon type={ type } style={{ fontSize: 16 }} />
                        { btnName }
                    </Button>
                    <Modal 
                        title={ title }
                        visible={ visible }
                        onOk={ this.handleOk }
                        onCancel={ this.handleCancel }
                    >
                        <div>
                            {html}
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default App;
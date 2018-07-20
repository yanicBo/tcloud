import React, { Component } from 'react';

import Modal from '../../../../../../components/Modal';
import Detail from '../detail';

class Options extends Component {

    state = {
        visible: false
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

    render() {
        const { item } = this.props;
        const { visible } = this.state;

        return (
            <div>
                <div className="options-style">
                    <div className="inline-block">
                        <Modal
                            component={(<Detail  {...this.props}/>)}
                            btnName="查看配置"
                            title="查看配置"
                            btnType="font"
                            visible={visible}
                            showModal={this.showModal}
                            handleCancel={this.handleCancel}
                            footer={true}
                        
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Options;
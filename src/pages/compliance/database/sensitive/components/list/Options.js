import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

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

        const menu = (
            <Menu>
                <Menu.Item key="1">编辑</Menu.Item>
                <Menu.Item key="2">删除</Menu.Item>
            </Menu>
        )
        // 已删除
        const delteOption = (
            <div className="options-style">
                <div className="inline-block">
                    <Modal
                        component={(<Detail />)}
                        btnName="查看"
                        title="查看"
                        btnType="font"
                        visible={visible}
                        showModal={this.showModal}
                        handleCancel={this.handleCancel}
                        footer={true}
                    />
                </div>
                <div className="inline-block">
                    <span class="btn-name">还原</span>
                </div>
            </div>
        );

        // 在用
        const useOption = (
            <div className="options-style">
                <div className="inline-block">
                    <Modal
                        component={(<Detail  {...this.props}/>)}
                        btnName="查看"
                        title={item.sensitive}
                        btnType="font"
                        visible={visible}
                        showModal={this.showModal}
                        handleCancel={this.handleCancel}
                        footer={true}
                       
                    />
                </div>
                <div className="inline-block">
                    <Dropdown overlay={menu}>
                        <span>
                            更多 <Icon type="down" />
                        </span>
                    </Dropdown>
                </div>
            </div>
        );

        const optionsSelect = () => {
            switch (item.useState) {
                case 1:
                    return (
                        <div>
                            {useOption}
                        </div>
                    )
                    break;
                case 2:
                    return (
                        <div>
                            {delteOption}
                        </div>
                    )
                    break;
                default:
                    return null
            }
        }

        return (
            <div>
                {optionsSelect()}
            </div>
        );
    }
}

export default Options;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

import Modal from '../../../../../../components/Modal';
import Detail from '../detail';
import AddEdit from '../addEdit';

class Options extends Component {
    state = {
        checkVisible: false,
        addVisible: false
    }

    // 打开弹窗
    showModal = (name) => {
        this.setState({
            [name]: true,
        });
    };

    // 取消弹框
    handleCancel = (name) => {
        this.setState({
            [name]: false,
        });
        console.log(this.state)
    }


    render() {
        const { item } = this.props;
        
        const menu = (
            <Menu>
                <Menu.Item key="1">
                    <Modal
                        component={(<AddEdit item={item} ref="form" />)}
                        btnName="编辑"
                        title="编辑词库"
                        btnType="font"
                        visible={addVisible}
                        showModal={() => this.showModal('addVisible')}
                        handleOk={this.handleOk}
                        handleCancel={() => this.handleCancel('addVisible')}
                    />
                </Menu.Item>
                <Menu.Item key="2">删除</Menu.Item>
            </Menu>
        );
        const { checkVisible, addVisible } = this.state;
        // 已删除
        const delteOption = (
            <div className="options-style">
                <div className="inline-block">
                    <Modal
                        component={(<Detail item={item}/>)}
                        btnName="查看"
                        title="查看详情"
                        btnType="font"
                        visible={checkVisible}
                        showModal={() => this.showModal('checkVisible')}
                        handleCancel={() => this.handleCancel('checkVisible')}
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
                        component={(<Detail item={item}/>)}
                        btnName="查看"
                        title="查看详情"
                        btnType="font"
                        visible={checkVisible}
                        showModal={() => this.showModal('checkVisible')}
                        handleCancel={() => this.handleCancel('checkVisible')}
                        footer={true}
                    />
                    <div style={{display: 'none'}}>
                    <Modal
                        component={(<AddEdit item={item} ref="form" />)}
                        btnName="编辑"
                        title="编辑词库"
                        btnType="font"
                        visible={addVisible}
                        showModal={() => this.showModal('addVisible')}
                        handleOk={this.handleOk}
                        handleCancel={() => this.handleCancel('addVisible')}
                    />
                    </div>
                </div>
                <div className="inline-block">
                    <Dropdown 
                        overlay={menu} 
                        trigger={['click']}
                    >
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
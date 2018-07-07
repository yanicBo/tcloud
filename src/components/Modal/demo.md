----

component:      组件 
btnName:        按钮名称
title：         弹窗title
iconType:       按钮图标
btnType：       按钮样式  "button"按钮, "font"文字
visible：       弹窗显示true or false
showModal:      打开弹窗方法
handleOk：      确认触发回调函数
handleCancel：  取消触发回调函数

----

```jsx

import React, { Component } from 'react';
import { message } from 'antd';
import Modal from '../../../../components/Modal';
import Detail from './detail';
import { req } from '../../../../utils';

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
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    // 取消
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    render() {
        const { visible } = this.state;
        return (
            <div className="option">
                <div className="pull-right">
                    <Modal
                        component={(<Detail ref="form" />)}
                        btnName="新增仓库" 
                        title="新增仓库关系"
                        iconType="plus"
                        btnType="button"
                        visible={visible}
                        showModal={this.showModal}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                </div>
            </div>
        );
    }
}

export default Option;

```
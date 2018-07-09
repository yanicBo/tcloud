
### 参数说明

|参数|说明|类型|默认值|
|-|-|-|-|
|component|组件|class|-|
|btnName|按钮名称|String|-|
|title|弹窗标题|String|-|
|iconType|按钮图标|String|-|
|btnType|按钮样式  "button"按钮, "font"文字|String|button|
|visible|是否弹出弹窗|Bool|true|
|showModal|打开弹窗回调函数|Function|Function()|
|handleOk|确认触发回调函数|Function|Function(event)|
|handleCancel|取消触发回调函数|Function|Function()|


### 引入

```

import React, { Component } from 'react';
import { message } from 'antd';
import Modal from '../components/Modal';
import Detail from 'detail';
import { req } from '../utils';

```

### 组件

```

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
        const { visible } = this.props;
        return (
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
        );
    }
}

export default Option;

```
import React, { Component } from 'react';
import { Popconfirm } from 'antd';
import './index.css';

class App extends Component {

    render() {
        const {text, btnName, onConfirm} = this.props;
        return (
            <div className="tcloud-popconfirm">
                <Popconfirm 
                    placement="topRight" 
                    title={text} 
                    onConfirm={onConfirm} 
                    okText="确定" 
                    cancelText="取消"
                >
                    <span className="btn-name">{btnName}</span>
                </Popconfirm>
            </div>
        );
    }
}

export default App;
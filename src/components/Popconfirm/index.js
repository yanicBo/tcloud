import React, { Component } from 'react';
import { Popconfirm } from 'antd';
import './index.css';

class App extends Component {
    onConfirm = (e) => {
        console.log(e)
    };

    render() {
        const {text, btnName} = this.props;
        return (
            <div className="tcloud-popconfirm">
                <Popconfirm 
                    placement="topRight" 
                    title={text} 
                    onConfirm={this.onConfirm} 
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
import React, { Component } from 'react';
import { Button } from 'antd';
import { setCookie } from '../../utils';
import './error.css';


class App extends Component {
    state = {
        seconds: 3,
    }

    componentDidMount() {
        this.tiemout()
    }

    onClick = () => {
        setCookie('ticket', '', -1);
        setCookie('username', '', -1);
        setCookie('funcVersion', '', -1);
        location.href = '/';
    }

    tiemout = () => {
        let siv = setInterval(() => {
            this.setState((preState) => ({
                seconds: preState.seconds - 1
            }), () => {
                if (this.state.seconds == 0) {
                    clearInterval(siv);
                    this.onClick();
                }
            });
        }, 1000)
    }

    render() {
        const { seconds } = this.state;
        return (
            <div className="tcloud-timeout">
                <div className="error-logo">
                    <div className="img" />
                    <div className="title">
                        <span className="color-green">T</span>
                        <span className="color-blue">Cloud</span>
                    </div>
                </div>
                <div className="error-main">
                    <div className="error-tips">
                        <div className="error-tips1">
                            <p>对不起，你的登录时间已经超时</p>
                            <p>页面自动跳转</p>
                            <p>等待时间：{seconds} 秒！</p>
                        </div>
                        <div className="error-tips2">
                            你可以立即跳转到 <Button type="primary" onClick={this.onClick}>登 录</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;
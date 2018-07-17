import React, { Component } from 'react';
import { deleteSession } from "../../utils";

class App extends Component {
    state = {
        seconds: 3,
    }

    componentDidMount() {
        this.tiemout()
    }

    tiemout = () => {
        let siv = setInterval(() => {
            this.setState((preState) => ({
                seconds: preState.seconds - 1
            }), () => {
                if (this.state.seconds == 0) {
                    clearInterval(siv);
                    deleteSession();
                }
            });
        }, 1000)
    }

    render() {
        const { seconds } = this.state;
        return (
            <div>
                <div className="error-tips1">
                    <p>页面自动跳转</p>
                    <p>等待时间：{seconds} 秒！</p>
                </div>
            </div>
        );
    }
}

export default App;
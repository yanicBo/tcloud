import React, { Component } from 'react';
import { Steps, Icon, Button, Upload, Radio } from 'antd';
const Step = Steps.Step;
const RadioGroup = Radio.Group;

class App extends Component {

    render() {
        return (
            <div>
                <Steps size="small" current={1}>
                    <Step title="数据准备" />
                    <Step title="数据验证" />
                    <Step title="导入结果" />
                </Steps>
                <div className="verification">
                    <div>
                        数据验证通过
                    </div>
                    {/* <p>
                        <a href="/" target="_target">
                            <Icon type="download" style={{ fontSize: 16 }} /> 错误结果集下载
                        </a>
                    </p> */}
                </div>
                <div className="btn-height"></div>
                <div className="btn">
                    <Button type="primary">下一步</Button>
                </div>
            </div >
        );
    }
}

export default App;
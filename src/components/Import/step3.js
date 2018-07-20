import React, { Component } from 'react';
import { Steps, Icon, Button, Upload, Radio } from 'antd';
const Step = Steps.Step;
const RadioGroup = Radio.Group;

class App extends Component {

    render() {
        return (
            <div>
                <Steps size="small" current={2}>
                    <Step title="数据准备" />
                    <Step title="数据验证" />
                    <Step title="导入结果" />
                </Steps>
                <div className="verification">
                    <div className="padding-md">
                        <Icon type="check-circle" style={{ fontSize: 70, color: '#4D7BFE' }} />
                    </div>
                    <div className="padding-md" style={{ fontSize: 20, color: '#4D7BFE' }}>操作成功</div>
                </div>
                <div className="btn-height"></div>
                <div className="btn">
                    <Button type="primary">再导入一次</Button>
                </div>
            </div >
        );
    }
}

export default App;
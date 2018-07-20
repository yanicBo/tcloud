import React, { Component } from 'react';
import { Steps, Icon, Button, Upload, Radio } from 'antd';
const Step = Steps.Step;
const RadioGroup = Radio.Group;

import './index.css';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

class App extends Component {

    render() {
        return (
            <div className="tcloud-import">
                <Step3/>
            </div >
        );
    }
}

export default App;
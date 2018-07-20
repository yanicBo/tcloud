import React, { Component } from 'react';
import { Steps, Icon, Button, Upload, Radio } from 'antd';
const Step = Steps.Step;
const RadioGroup = Radio.Group;

class App extends Component {

    render() {
        return (
            <div>
                <Steps size="small" current={0}>
                    <Step title="数据准备" />
                    <Step title="数据验证" />
                    <Step title="导入结果" />
                </Steps>
                <div className="margin-md-top">
                    <div className="margin-sm-bottom">1. 准备数据</div>
                    <div className="padding-md-left">
                        <a href="/" target="_target">
                            <Icon type="download" style={{ fontSize: 16 }} /> 下载导入模板
                        </a>
                    </div>
                </div>
                <div className="margin-md-top">
                    <div className="margin-sm-bottom">2. 上传数据文件</div>
                    <div className="padding-md-left">
                        <p>目前支持的文件类型为*.xls,*.xlsx</p>
                        <Upload>
                            <Button>
                                <Icon type="upload" /> 添加文件
                            </Button>
                        </Upload>
                    </div>
                </div>
                <div className="margin-md-top">
                    <div className="margin-sm-bottom">3. 导入方式</div>
                    <div className="padding-md-left">
                        <RadioGroup onChange={this.onChange}>
                            <Radio value={1}>全部</Radio>
                            <div className="font">处理整个文件（如 敏感词 已经存在，则更新相应的信息。如果 敏感词 不存在， 则自动创建新的敏感词）</div>
                            <Radio value={2}>仅处理新的敏感词</Radio>
                            <div className="font">仅处理不存在的 敏感词（忽略已有的 敏感词，只为系统中不存在的 敏感词 创建 新的项目）</div>
                            <Radio value={3}>仅更新</Radio>
                            <div className="font">仅处理已有的 敏感词（更新已有的 敏感词，忽略系统中不存在的 敏感词）</div>
                        </RadioGroup>
                    </div>
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
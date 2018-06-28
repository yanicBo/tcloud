import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class App extends Component {
    
    render() {
        return (
            <div className="breadcrumb">
                <div className="tclould-tab">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="公司资料" key="1">公司资料</TabPane>
                        <TabPane tab="海关资料" key="2">海关资料</TabPane>
                        <TabPane tab="合同资料" key="3">合同资料</TabPane>
                        <TabPane tab="核对清单" key="4">核对清单</TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import './index.css'

class Tab extends Component {
    render() {
        const { tab } = this.props;
        return (
            <div className="tclould-tab">
                <Tabs defaultActiveKey="1">
                    {
                        tab.map((item, index) => (
                            <TabPane tab={item.name} key={item.id}/>
                        ))
                    }
                </Tabs>
            </div>
        );
    }
}

export default Tab;
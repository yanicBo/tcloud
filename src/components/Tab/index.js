import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import './index.css'

class Tab extends Component {
    render() {
        const { tab } = this.props;
        return (
            <div className="tclould-tab">
                <Tabs 
                    defaultActiveKey="1"
                    animated={false}
                >
                    {
                        tab.map((item, index) => (
                            <TabPane tab={item.name} key={item.id}>
                                <div className="padding-lg-bottom">
                                    {item.children}
                                </div>
                            </TabPane>
                        ))
                    }
                </Tabs>
            </div>
        );
    }
}

export default Tab;
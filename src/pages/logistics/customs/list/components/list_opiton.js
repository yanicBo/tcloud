import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';

class Option extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="1">获取FBA物流计划单</Menu.Item>
                <Menu.Item key="2">导入海外仓源数据</Menu.Item>
            </Menu>
        );
        return (
            <div className="option">
                <div className="pull-left">
                    <Button>合并报关单</Button>
                </div>
                <div className="pull-right">
                    <Button>导入报关单</Button>
                    <Dropdown overlay={menu}>
                        <Button style={{ marginLeft: 8 }}>
                            新建报关单 <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default Option;
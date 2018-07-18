import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';

class Option extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="1">批量还原</Menu.Item>
                <Menu.Item key="2">批量删除</Menu.Item>
            </Menu>
        );
        return (
            <div className="option">
                <div className="pull-left">
                    <Dropdown overlay={menu}>
                        <Button>
                            批量操作 <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
                <div className="pull-right">
                    <Button className="margin-xm-right"><Icon type="plus" style={{ fontSize: 16}} /> 新增词库</Button>
                    <Button className="margin-xm-right"><Icon type="download" style={{ fontSize: 16}} /> 数据导入</Button>
                    <Button className="margin-xm-right"><Icon type="export" style={{ fontSize: 16}} /> 数据导出</Button>
                    <Button><Icon type="api" style={{ fontSize: 16}} /> 爬虫抓取</Button>
                </div>
            </div>
        );
    }
}

export default Option;
import React, { Component } from 'react';
import { Button, Icon, Dropdown, Menu } from 'antd';

class Option extends Component {
    
    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1">导出员工</Menu.Item>
            </Menu>
        );

        return (
            <div className="overflow-hidden margin-sm-bottom">
                <div className="pull-left">
                    <Dropdown overlay={menu}>
                        <Button>
                            批量操作 <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
                <div className="pull-right">
                    <Button><Icon type="reload"/> 同步数据</Button>
                </div>
            </div>
        );
    }
}

export default Option;
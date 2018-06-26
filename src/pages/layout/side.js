import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Side extends Component {
    // 初始化状态
    constructor(props) {
        super(props);
        this.state = {
            openKeys: '',
            selectedKeys: '',
        }
    }

    // 渲染前调用
    componentWillMount() {
        const pathname = location.pathname;
        this.props.menu.map((item, index) => {
            if (item.sub.length === 0) {
                if (pathname.indexOf(item.router) > 0) {
                    this.setState({ selectedKeys: index.toString() });
                }
            } else {
                if (pathname.search(item.router) > 0) {
                    this.setState({ openKeys: index.toString() });
                    item.sub.map((_item, _index) => {
                        if (pathname.search(_item.router) > 0) {
                            this.setState({ selectedKeys: index + '-' + _index });
                        }
                    });
                }
            }
        })
    }

    // 控制二级菜单显示状态
    onOpenChange = (openKeys) => {
        if (openKeys.length === 0) {
            this.setState({ openKeys: '' });
        } else {
            var last = openKeys[openKeys.length - 1];
            this.setState({ openKeys: last.toString() });
        }

    }

    // 三级菜单显示状态
    onSelect = (item) => {
        this.setState({ selectedKeys: item.key });
    }

    // 通过是否有三级菜单渲染对应的二级菜单
    renderMenu() {
        var menu = this.props.menu;
        var result = menu.map((item, index) => {
            if (item.sub.length === 0) {
                return (
                    <Menu.Item key={index}>
                        <Link to={'/' + item.router}><span><Icon type={item.icon} /> <span>{item.name}</span></span></Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={index} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                        {
                            item.sub.map((_item, _index) => (
                                <Menu.Item key={index + '-' + _index}>
                                    <Link to={'/' + _item.router}>{_item.name}</Link>
                                </Menu.Item>
                            ))
                        }
                    </SubMenu>
                );
            }
        });
        return result;
    }
    render() {

        return (
            <Sider className="side"
                collapsible
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    openKeys={[this.state.openKeys]}
                    selectedKeys={[this.state.selectedKeys]}
                    onOpenChange={this.onOpenChange}
                    onSelect={this.onSelect}
                >
                    {this.renderMenu()}
                </Menu>
            </Sider>
        )
    }
}

export default Side;



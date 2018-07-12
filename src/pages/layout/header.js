import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Dropdown, Icon, Modal, Button } from 'antd';
const { Header } = Layout;
const confirm = Modal.confirm;

import { req, setCookie } from '../../utils';
import { path, paramType } from '../../configs';

class Top extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedKeys: ''
        } 
    }
    componentWillMount(){
        const pathname = location.pathname;
        this.props.menu.map((item, index) => {
            if(pathname.search(item.router) > 0){
                this.setState({selectedKeys: index.toString()});
            }
        })
    }
    
    onSelect = (item) => {
        this.setState({ selectedKeys: item.key });
    }

    // 退出
    logout() {
        confirm({
            title: '确定要退出登录?',
            content: '退出将返回登录页面.',
            onOk() {
                req.http(path.urc+'logout', {}).then(() => {
                    setCookie('ticket', '', -1);
                    setCookie('username', '', -1);
                    setCookie('funcVersion', '', -1);
                    location.href = '/';
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    render () {
        const user = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"><Icon type="user" /> 个人中心</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"><Icon type="edit" /> 修改密码</a>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={this.logout}><Icon type="logout" /> 退出登录</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <Header className="header">
                <div className="logo" >
                    <div className="img"/>
                    <div className="title">
                        <span className="color-green">T</span>
                        <span className="color-blue">Cloud</span>
                    </div>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    onSelect={this.onSelect}
                    selectedKeys={[this.state.selectedKeys]}
                    style={{ lineHeight: '64px' }}
                >
                    {
                        this.props.menu.map((item, index) => (
                            <Menu.Item key={ index }>
                                <Link to={ '/'+item.router }>
                                    { item.name }
                                </Link>
                            </Menu.Item>
                        ))
                    }
                </Menu>
                <div className="user">
                    <div className="user-dropdown">
                        <Dropdown overlay={user}>
                            <span>
                                你好，杨波！ <Icon type="down" />
                            </span>
                        </Dropdown>
                    </div>
                    <div className="user-avatar">
                        <Avatar icon="user" />
                    </div>
                </div>
            </Header>
        )
    }
}
export default Top;
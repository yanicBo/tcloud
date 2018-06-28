import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

class Options extends Component {

    render() {
        // 子操作
        const submenu = () => {
            let type = this.props.type;
            switch (type) {
                case '待制单':
                    return (
                        <Menu>
                            <Menu.Item>
                                <Link to="/">查看报关资料</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/">撤销合并</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/">删除</Link>
                            </Menu.Item>
                        </Menu>
                    )
                    break;
                case '待审核':
                    return (
                        <Menu>
                            <Menu.Item>
                                <Link to="/">查看报关资料</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/">查看制单</Link>
                            </Menu.Item>
                        </Menu>
                    )
                    break;
                case '待申报':
                    return null
                    break;
                case '已申报':
                    return null
                    break;
                case '待修改':
                    return (
                        <Menu>
                            <Menu.Item>
                                <Link to="/">查看报关资料</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/">删除</Link>
                            </Menu.Item>
                        </Menu>
                    )
                    break;
                default:
                    return null
            }
        }

        // 待制单
        const pendingorder = (
            <div className="options-style">
                <ul>
                    <li>
                        <Link to="/">制单</Link>
                        <em className="ant-list-item-action-split"></em>
                    </li>
                    <li>
                        <Dropdown overlay={submenu()}>
                            <span>
                                更多 <Icon type="down" />
                            </span>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        );

        // 待审核
        const pendingAuto = (
            <div className="options-style">
                <ul>
                    <li>
                        <Link to="/">审核</Link>
                        <em className="ant-list-item-action-split"></em>
                    </li>
                    <li>
                        <Dropdown overlay={submenu()}>
                            <span>
                                更多 <Icon type="down" />
                            </span>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        );

        // 待申报
        const pendingDeclared = (
            <div className="options-style">
                <ul>
                    <li>
                        <Link to="/">审核</Link>
                        <em className="ant-list-item-action-split"></em>
                    </li>
                    <li>
                        <Link to="/">驳回</Link>
                    </li>
                </ul>
            </div>
        );

        // 已申报
        const declared = (
            <div className="options-style">
                <ul>
                    <li>
                        <Link to="/">查看</Link>
                        <em className="ant-list-item-action-split"></em>
                    </li>
                    <li>
                        <Link to="/">归档</Link>
                    </li>
                </ul>
            </div>
        );

        // 待修改
        const pendingEdit = (
            <div className="options-style">
                <ul>
                    <li>
                        <Link to="/">制单</Link>
                        <em className="ant-list-item-action-split"></em>
                    </li>
                    <li>
                        <Dropdown overlay={submenu()}>
                            <span>
                                更多 <Icon type="down" />
                            </span>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        );

        // 归档
        const file = (
            <div className="options-style">
                <ul>
                    <li>
                        <Link to="/">查看</Link>
                    </li>
                </ul>
            </div>
        );

        const optionsSelect = () => {
            let type = this.props.type;
            switch (type) {
                case '待制单':
                    return (
                        <div>
                            {pendingorder}
                        </div>
                    )
                    break;
                case '待审核':
                    return (
                        <div>
                            {pendingAuto}
                        </div>
                    )
                    break;
                case '待申报':
                    return (
                        <div>
                            {pendingDeclared}
                        </div>
                    )
                    break;
                case '已申报':
                    return (
                        <div>
                            {declared}
                        </div>
                    )
                    break;
                case '待修改':
                    return (
                        <div>
                            {pendingEdit}
                        </div>
                    )
                    break;
                default:
                    return (
                        <div>
                            {file}
                        </div>
                    )
            }
        }

        return (
            <div>
                {optionsSelect()}
            </div>
        );
    }
}

export default Options;
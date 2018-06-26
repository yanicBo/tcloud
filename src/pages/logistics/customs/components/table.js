import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Input } from 'antd';
import { timestampFromat } from '../../../../utils';

class EditableCell extends Component {
    state = {
        value: this.props.value,
        editable: false,
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
    }
    check = () => {
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit = () => {
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ? (
                        <Input
                            value={value}
                            onChange={this.handleChange}
                            onPressEnter={this.check}
                            suffix={
                                <Icon
                                    type="check"
                                    className="editable-cell-icon-check"
                                    onClick={this.check}
                                />
                            }
                        />
                    ) : (
                            <div style={{ paddingRight: 24 }}>
                                {value || ' '}
                                <Icon
                                    type="edit"
                                    className="editable-cell-icon"
                                    onClick={this.edit}
                                />
                            </div>
                        )
                }
            </div>
        );
    }
}

const onCellChange = (key, dataIndex) => {
    return (value) => {
        const dataSource = [...this.state.dataSource];
        const target = dataSource.find(item => item.key === key);
        if (target) {
            target[dataIndex] = value;
            this.setState({ dataSource });
        }
    };
}

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
    </Menu>
);

export const columnsList = [
    {
        title: '合同号',
        dataIndex: 'contractNumber',
        key: 'contractNumber',
        align: 'center'
    }, {
        title: '申报主体',
        dataIndex: 'campany',
        key: 'campany',
        align: 'center',
        render: (text, record) => {
            return (
                <div title={record.campany.fullName}>
                    {record.campany.shortName}
                </div>
            )
        }
    }, {
        title: '物流信息',
        dataIndex: 'lgtInfo',
        key: 'lgtInfo',
        width: 204,
        render: (text, record) => {
            return (
                <div className="lgt-info">
                    <div className="clear">
                        <div className="title">物流计划单号：</div>
                        <div className="content">
                            {
                                record.planNumber.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="clear">
                        <div className="title">物流状态：</div>
                        <div className="content">{record.logisticsState}</div>
                    </div>
                    <div className="clear">
                        <div className="title">目的国：</div>
                        <div className="content">{record.destCountry}</div>
                    </div>
                </div>
            )
        }
    }, {
        title: '流程信息',
        dataIndex: 'liuchengInfo',
        key: 'liuchengInfo',
        width: 294,
        render: (text, record) => {
            return (
                <div className="time-info">
                    <div className="clear">
                        <div className="item1">
                            <div className="title">创建人：</div>
                            <div className="content">{record.creator}</div>
                        </div>
                        <div className="item2">
                            <div className="title">创建时间：</div>
                            <div className="content">{timestampFromat(record.createTime, 'yyyy-mm-dd hh:MM:ss')}</div>
                        </div>
                    </div>
                    <div className="clear">
                        <div className="item1">
                            <div className="title">制单人：</div>
                            <div className="content">{record.singles}</div>
                        </div>
                        <div className="item2">
                            <div className="title">制单时间：</div>
                            <div className="content">{timestampFromat(record.createOrderTime, 'yyyy-mm-dd hh:MM:ss')}</div>
                        </div>
                    </div>
                    <div className="clear">
                        <div className="item1">
                            <div className="title">审核人：</div>
                            <div className="content">{record.audits}</div>
                        </div>
                        <div className="item2">
                            <div className="title">审核时间：</div>
                            <div className="content">{timestampFromat(record.auditTime, 'yyyy-mm-dd hh:MM:ss')}</div>
                        </div>
                    </div>
                </div>
            )
        }
    }, {
        title: '报关单号',
        dataIndex: 'customsNumber',
        key: 'customsNumber',
        align: 'center',
        width: 160,
        render: (text, record) => (
            <EditableCell
                value={text}
                onChange={onCellChange(record.key, 'name')}
            />
        ),
    }, {
        title: '报关状态',
        dataIndex: 'auditStatus',
        key: 'auditStatus',
        align: 'center'
    }, {
        title: '总金额(USD)',
        dataIndex: 'sum',
        key: 'sum',
        align: 'center'
    }, {
        title: '操作',
        dataIndex: 'options',
        key: 'options',
        width: 120,
        render: (text, record) => {
            return (
                <div className="options-style">
                    <ul>
                        <li>
                            制单
                            <em className="ant-list-item-action-split"></em>
                        </li>
                        <li>
                            <Dropdown overlay={menu}>
                                <span>
                                    更多 <Icon type="down"/>
                                </span>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            )
        }
    }
];
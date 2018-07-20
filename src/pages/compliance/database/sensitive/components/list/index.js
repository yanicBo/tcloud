import React, { Component } from 'react';
import { Table, Pagination, message, Row, Col } from 'antd';

import Options from './options';
import { page } from '../../../../../../configs';
import { req, getStateName } from '../../../../../../utils';
import { useState, active, grade } from '../../../../data';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
};

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.props.list_reducer.data,
        };
        this.columns = [
            {
                title: '敏感词',
                dataIndex: 'sensitive',
                key: 'sensitive',
                align: 'center'
            }, {
                title: '敏感信息',
                dataIndex: 'sensitiveInfo',
                key: 'sensitiveInfo',
                render: (text, record) => {
                    return (
                        <div>
                            <Row gutter={24}>
                                <Col span={24}>禁售平台：{record.salePlatform}</Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={24}>禁售国家：{record.country.name}</Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={24}>敏感等级：{getStateName(record.sensitivityGrade, grade)}</Col>
                            </Row>
                        </div>
                    )
                }
            }, {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
                render: (text, record) => {
                    return (
                        <div>
                            <Row gutter={24}>
                                <Col span={24}>活跃状态：{getStateName(record.activeState, active)}</Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={24}>在用状态：{getStateName(record.useState, useState)}</Col>
                            </Row>
                        </div>
                    )
                }
            }, {
                title: '商标信息',
                dataIndex: 'trademarkInfo',
                key: 'trademarkInfo',
                width: 300,
                render: (text, record) => {
                    return (
                        <div>
                            <Row gutter={24}>
                                <Col span={12}>权利人：{record.obligee}</Col>
                                <Col span={12}>数据来源：{record.source}</Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={12}>商标号：{record.trademarkNumber}</Col>
                                <Col span={12}>商标类别：{
                                    record.trademark.map((item, index) => (
                                        <span key={index}>{item.name}；</span>
                                    ))
                                }</Col>
                            </Row>
                        </div>
                    )
                }
            }, {
                title: '图片',
                dataIndex: 'img',
                key: 'img',
                align: 'center',
                render: (text, record) => (
                    <div>
                        <img src={text} style={{width: 60, height:60}}/>
                    </div>
                ),
            }, {
                title: '图片类型',
                dataIndex: 'imgType',
                key: 'imgType',
                align: 'center'
            }, {
                title: '操作',
                dataIndex: 'options',
                key: 'options',
                width: 120,
                render: (text, record) => {
                    return (
                        <Options item={record} />
                    )
                }
            }
        ]
    }

    componentDidMount() {
        this.props.listFetch();
    };

    // 修改报关单号
    onCellChange = (id, name) => {
        req.http('/api/customs/editNumber', { id: id }).then(data => {
            message.success('操作成功.');
            return (value) => {
                const dataSource = [...this.state.dataSource];
                const target = dataSource.find(item => item.id === id);
                if (target) {
                    target[name] = value;
                    this.setState({ dataSource });
                }
            };
        })
    }

    render() {
        const { data } = this.props.list_reducer;
        const columns = this.columns;
        const { total, current, pageSize } = this.props.paginationReducer;
        const { listFetch } = this.props;
        return (
            <div>
                <div className="table">
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        rowKey={(record, index) => (index)}
                        size="small" />
                </div>
                <div className="pagination">
                    <Pagination className="pull-right"
                        showTotal={total => `共 ${total} 条`}
                        pageSizeOptions={page.pageSizeOptions}    // 指定每页可以显示多少条
                        showSizeChanger                             // 是否可以改变 pageSize
                        defaultCurrent={page.defaultCurrent}      // 默认的当前页数
                        current={current}
                        showQuickJumper                             // 是否可以快速跳转至某页
                        total={total}                             // 数据总数
                        pageSize={pageSize}                       // 每页条数
                        onChange={listFetch}                // 页码改变的回调，参数是改变后的页码及每页条数
                        onShowSizeChange={listFetch}        // pageSize 变化的回调
                        size="small"
                    />
                </div>
            </div>
        );
    }
}

export default List;

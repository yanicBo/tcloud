import React, { Component } from 'react';
import { Table, Pagination } from 'antd';

import Options from './Options';
import EditableCell from './EditableCell';

import { page } from '../../../../../configs';
import { timestampFromat } from '../../../../../utils';

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
            dataSource: this.props.customs_list_reducer.data,
        };
        this.columns = [
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
                        onChange={this.onCellChange(record.key, 'name')}
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
                        <Options type={record.auditStatus} id={record.id} />
                    )
                }
            }
        ]
    }

    componentDidMount() {
        this.props.customsListFetch();
    };

    // 修改报关单号
    onCellChange = (key, dataIndex) => {
        return (value) => {
            const dataSource = [...this.state.dataSource];
            const target = dataSource.find(item => item.key === key);
            if (target) {
                target[dataIndex] = value;
                this.setState({ dataSource });
            }
        };
    }

    render() {
        const { data } = this.props.customs_list_reducer;
        const columns = this.columns;
        const { total, current, pageSize } = this.props.paginationReducer;
        const { customsListFetch } = this.props;
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
                        onChange={customsListFetch}                // 页码改变的回调，参数是改变后的页码及每页条数
                        onShowSizeChange={customsListFetch}        // pageSize 变化的回调
                        size="small"
                    />
                </div>
            </div>
        );
    }
}

export default List;

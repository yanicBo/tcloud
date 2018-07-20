import React, { Component } from 'react';
import { Table, Pagination, message, Row, Col } from 'antd';

import Options from './options';
import { page } from '../../../../../../configs';
import { req, getStateName } from '../../../../../../utils';
import { options } from '../../../../data';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.props.list_reducer.data,
        };
        this.columns = [
            {
                title: '处理人员',
                dataIndex: 'options',
                key: 'options',
                align: 'center'
            },{
                title: '处理时间',
                dataIndex: 'optionTime',
                key: 'optionTime',
                align: 'center'
            },{
                title: '处理状态',
                dataIndex: 'state',
                key: 'state',
                align: 'center',
                render: (text, record) => {
                    return (
                        <span>{getStateName(record.state, options)}</span>
                    )
                }
            },{
                title: '获取数量',
                dataIndex: 'getSum',
                key: 'getSum',
                align: 'center'
            },{
                title: '处理完成时间',
                dataIndex: 'optionCompleteTime',
                key: 'optionCompleteTime',
                align: 'center'
            },{
                title: '失败原因',
                dataIndex: 'optionReason',
                key: 'optionReason',
                align: 'center'
            }, {
                title: '操作',
                dataIndex: 'option',
                key: 'option',
                align: 'center',
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

    render() {
        const { data } = this.props.list_reducer;
        const columns = this.columns;
        const { total, current, pageSize } = this.props.paginationReducer;
        const { listFetch } = this.props;
        return (
            <div>
                <div className="table">
                    <Table
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
                        showSizeChanger                           // 是否可以改变 pageSize
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

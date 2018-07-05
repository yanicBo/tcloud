import React, { Component } from 'react';
import { Table, Pagination, Row, Col } from 'antd';

import Options from './options';
import { page } from '../../../../../configs';
import { timestampFromat } from '../../../../../utils';

class List extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '序号',
                dataIndex: 'sNum',
                key: 'sNum',
                align: 'center',
                width: 60
            }, {
                title: '仓库信息',
                dataIndex: 'depot',
                key: 'depot',
                render: (text, record) => {
                    return (
                        <div>
                            <Row gutter={24}>
                                <Col span={12}>编码：{text.code}</Col>
                                <Col span={12}>性质：{text.nature}</Col>
                            </Row>
                            <Row gutter={24}>
                                
                                <Col span={12}>名称：{text.name}</Col>
                                <Col span={12}>分类：{text.type}</Col>
                            </Row>
                        </div>
                    )
                }
            }, {
                title: '国家',
                dataIndex: 'country',
                key: 'country',
                align: 'center',
            }, {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
                align: 'center'
            }, {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
                align: 'center',
                render: (text, record) => {
                    return (
                        <div>
                            {
                                text===1 ?  '启用': '禁用'
                            }
                        </div>
                    )
                }
            }, {
                title: '新增信息',
                dataIndex: 'createInfo',
                key: 'createInfo',
                render: (text, record) => {
                    return (
                        <div>
                            <Row gutter={24}>
                                <Col span={24}>新增人：{text.creator}</Col>
                            </Row>
                            <Row gutter={24}> 
                                <Col span={24}>新增时间：{timestampFromat(text.createTime, 'yyyy-mm-dd hh:MM:ss')}</Col>
                            </Row>
                        </div>
                    )
                }
            }, {
                title: '操作',
                dataIndex: 'options',
                key: 'options',
                align: 'center',
                width: 120,
                render: (text, record) => {
                    return (
                        <Options item={record}/>
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
                        columns={ columns }
                        dataSource={ data }
                        pagination={ false }
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

import React, { Component } from 'react';
import { Table, Pagination, Row, Col } from 'antd';

import { page } from '../../../../../configs';

class List extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '员工',
                dataIndex: 'staff',
                key: 'staff',
                render: (text, record) => {
                    return (
                        <div>
                            <Row gutter={24}>
                                <Col span={12}>姓名：{record.personName}</Col>
                                <Col span={12}>职位：{record.position}</Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={12}>工号：{record.jobNumber}</Col>
                            </Row>
                        </div>
                    )
                }
            }, {
                title: '日期',
                dataIndex: 'date',
                key: 'date',
                render: (text, record) => {
                    return (
                        <div>
                            <Row gutter={24}>
                                <Col span={24}>出生日期：{record.birthdayStr}</Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={24}>入职日期：{record.joinDateStr}</Col>
                            </Row>
                        </div>
                    )
                }
            }, {
                title: '联系方式',
                dataIndex: 'contact',
                key: 'contact',
                render: (text, record) => {
                    return (
                        <div>
                            <Row gutter={24}>
                                <Col span={24}>手机号：{record.phoneNum}</Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={24}>邮箱:{record.email}</Col>
                            </Row>
                        </div>
                    )
                }
            }, {
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName',
                align: 'center'
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

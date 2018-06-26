import React, { Component } from 'react';
import { Table, Pagination } from 'antd';

import { columnsList } from "../components/table";
import { page } from '../../../../configs';


const columns = columnsList;

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
    componentDidMount() {
        this.props.customs_list_fetch({
            name: 'data', value: {
                pageData: 20,
                pageNumber: 1
            }
        });
    }
    changePage = () => {
        
    }
    render() {
        const { data } = this.props.customs_list_reducer;
        const { total, current, pageSize } = this.props.paginationReducer;
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
                        onChange={this.changePage}                // 页码改变的回调，参数是改变后的页码及每页条数
                        onShowSizeChange={this.changePage}        // pageSize 变化的回调
                        size="small"
                    />
                </div>
            </div>
        );
    }
}

export default List;
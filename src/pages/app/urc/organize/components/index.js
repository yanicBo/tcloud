import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Form, Spin, message } from 'antd';

import actions from '../actions';

import Organize from './organize';
import Search from './search';
import Option from './option';
import List from './list';

import { filterRequest } from '../../../../../utils';
import { page } from '../../../../../configs';

class App extends Component {
    handleSubmit =() => {

    }

    // 请求列表
    listFetch = (pageNumber, pageData, dingOrgId ) => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const filter = filterRequest(values)
                filter['pageNumber'] = pageNumber || page.defaultCurrent;
                filter['pageData'] = pageData || page.defaultPageSize;
                filter['dingOrgId'] = dingOrgId || "1";
                this.props.list_fetch({ name: 'data', value: filter });
            }
        });
    }

    // 同步数据
    onSynData = () => {
        return req.http(path.urc + 'syncDingOrgAndUser', {}).then((data) => {
            message.success('成功同步数据.');
        });
    }

    render() {
        const { loading } = this.props.list_reducer;
        return (
            <div className="urc">
                <Form className="display-flex" onSubmit={this.handleSubmit}>
                    <Organize {...this.props} listFetch={this.listFetch}/>
                    <div className="width-100">
                        <Search {...this.props}/>
                        <div className="breadcrumb padding-sm overflow-hidden margin-md-top margin-md-left">
                            <Spin spinning={loading} delay={500}>
                                <Option {...this.props} onSynData={this.onSynData}/>
                                <List {...this.props} listFetch={this.listFetch}/>
                            </Spin>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}

export default connect(
    state => ({ ...state }),
    dispatch => bindActionCreators(actions, dispatch)
)(
    Form.create()(App)
);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Form, Spin } from 'antd';

import Search from "./search/index";
import List from "./list/index";
import Option from "./opiton";
import actions from '../actions';

import { filterRequest } from '../../../../utils';
import { page } from '../../../../configs';

class App extends Component {

    state = {
        tagValue: {
            state: [0]
        }
    }

    // 请求列表
    listFetch = (pageNumber, pageData ) => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const filter = filterRequest(values)
                filter['pageNumber'] = pageNumber || page.defaultCurrent;
                filter['pageData'] = pageData || page.defaultPageSize;
                const filters = { ...this.state.tagValue, ...filter}
                this.setState({
                    tagValue: filters
                })
                this.props.list_fetch({ name: 'data', value: filter });
            }
        });
    }

    

    render() {
        const { loading } = this.props.list_reducer;
        return (
            <div className="newp">
                <Search {...this.props} listFetch={this.listFetch} tagValue={this.state.tagValue}/>
                <div className="breadcrumb padding-sm overflow-hidden margin-md-top">
                    <Spin spinning={loading} delay={500}>
                        <Option {...this.props}/>
                        <List {...this.props} listFetch={this.listFetch}/>
                    </Spin>
                </div>
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
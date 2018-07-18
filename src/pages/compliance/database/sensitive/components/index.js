import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Form } from 'antd';

import Search from "./search/index";
import List from "./list/index";
import Option from "./opiton";
import actions from '../actions';

import { filterRequest } from '../../../../../utils';
import { page } from '../../../../../configs';

class App extends Component {

    state = {
        tagValue: {
            useState: [0],
            sensitivityGrade: [0],
            activeState: [0]
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

    // 重置
    onReset = () => {
        this.setState({
            tagValue: {
                useState: [0],
                sensitivityGrade: [0],
                activeState: [0]
            }
        })
        this.props.form.resetFields();
    }

    render() {
        return (
            <div className="sensitive">
                <Search {...this.props} listFetch={this.listFetch} tagValue={this.state.tagValue} onReset={this.onReset}/>
                <div className="breadcrumb padding-sm overflow-hidden margin-md-top">
                    <Option />
                    <List {...this.props} listFetch={this.listFetch}/>
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
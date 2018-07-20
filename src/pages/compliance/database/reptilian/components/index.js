import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Form, Spin, Icon } from 'antd';

import Search from "./search/index";
import List from "./list/index";
import Option from "./opiton";
import actions from '../actions';

import { filterRequest } from '../../../../../utils';
import { page } from '../../../../../configs';

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

    // 重置
    onReset = () => {
        this.setState({
            tagValue: {
                state: [0]
            }
        })
        this.props.form.resetFields();
    }

    render() {
        const { loading } = this.props.list_reducer;
        const antIcon = <img src={require('../../../../../assets/img/loading.gif')} style={{width: '80px',height: '80px'}} />;
        return (
            <div className="reptilian">
                <Search {...this.props} listFetch={this.listFetch} tagValue={this.state.tagValue} onReset={this.onReset}/>
                <div className="breadcrumb padding-sm overflow-hidden margin-md-top">
                    <Spin spinning={loading} indicator={antIcon} delay={500}>
                        <Option />
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
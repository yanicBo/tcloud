import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Form } from 'antd';

import Search from "./search";
import List from "./list";
import Option from "./list_opiton";
import actions from '../actions';

import { filterRequest } from '../../../../utils';

class App extends Component {

    state = {
        tagValue: {
            declarationType: [0],
            companyId: [0],
            logisticsStatus: [0],
            depotType: [0]
        }
    }

    // 请求列表
    customsListFetch = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const filter = filterRequest(values)
                const filters = { ...this.state.tagValue, ...filter}
                this.setState({
                    tagValue: filters
                })
                this.props.customs_list_fetch({ name: 'data', value: filter });
            }
        });
    }

    // 重置
    onReset = () => {
        this.setState({
            tagValue: {
                declarationType: [0],
                companyId: [0],
                logisticsStatus: [0],
                depotType: [0],
            }
        })
        this.props.form.resetFields();
    }

    render() {
        return (
            <div>
                <Search {...this.props} customsListFetch={this.customsListFetch} tagValue={this.state.tagValue} onReset={this.onReset}/>
                <div className="breadcrumb padding-sm overflow-hidden margin-md-top">
                    <Option {...this.props} />
                    <List {...this.props} />
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
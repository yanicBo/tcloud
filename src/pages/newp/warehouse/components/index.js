import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Form } from 'antd';

import actions from '../actions';

import { filterRequest } from '../../../../utils';
import { page } from '../../../../configs';

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
                jskjfskjflj
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
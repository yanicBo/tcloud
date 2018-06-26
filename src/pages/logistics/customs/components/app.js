import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Form } from 'antd';

import Search from "./search";
import List from "./list";
import Option from "./list_opiton";
import actions from '../actions';

class App extends Component {
    render() {
        return (
            <div>
                <Search {...this.props} />
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
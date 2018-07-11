import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Form } from 'antd';

import actions from '../actions';

import Organize from './organize';

class App extends Component {
    handleSubmit =() => {

    }

    render() {
        return (
            <div className="urc">
                <Form className="display-flex" onSubmit={this.handleSubmit}>
                    <Organize />
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
import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/app';

const middleware = [thunk];
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

export default class Entrance extends Component {
    render() {
        return (
            <Provider store={ store }>
                <App {...this.props}/>
            </Provider>
        );
    }
}
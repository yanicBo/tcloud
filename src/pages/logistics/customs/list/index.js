import React, { Component } from 'react';
import "./css/index.css";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import reducer from './reducers';
import App from './components/index';

// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger())
// }

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
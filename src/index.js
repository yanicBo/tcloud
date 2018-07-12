import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/css/common.css';

import { session } from "./utils/tools";

import MainRouter from './pages/layout/main';
import LoginRouter from './pages/layout/index';

class App extends Component {
    render() {
        var ticket = session('ticket');
        var isTicket = ticket ? true : false;
        var LayoutRouter = isTicket ? <MainRouter /> : <LoginRouter/>;
        return (
            <Router>
                <Route path="/" render={ props => LayoutRouter }/>
            </Router>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
);
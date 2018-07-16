import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Timeout from '../error/timeout';
import Main from '../layout/main';


class Home extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/timeout" render={() => <Timeout />} />
                <Route exact path="/" render={() => <Main />} />  
            </Switch>
        )
    }
}
export default Home;
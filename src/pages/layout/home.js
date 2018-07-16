import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Timeout from '../error/timeout';
import Main from '../layout/main';


class Home extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/timeout" render={() => <Timeout />} />
                    <Route exact path="/tcloud" render={() => <Main />} />
                </Switch>
            </div>
        )
    }
}
export default Home;
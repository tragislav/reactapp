import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';

class Ground_app extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/main' component={App} />
            </Switch>
        )
    }
}

export default Ground_app;
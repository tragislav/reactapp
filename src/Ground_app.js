import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import UserApp from './UserApp';
import SignIn from './SignIn';

class Ground_app extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/main' component={App} />
                <Route path='/foreign' component={UserApp} />
            </Switch>
        )
    }
}

export default Ground_app;
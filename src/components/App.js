import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { history } from '../helpers';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="">
          <div className="">
            <Router history={history}>
              <div>
                <Switch>
                  <Route exact path="/login" component={LoginPage} />
                  {localStorage.getItem('user') ? <Route path="/dashboard" component={Dashboard} /> :
                    <Redirect to='/login' /> }
                </Switch>
              </div>
            </Router>
          </div>
        </div>
    );
  }
}

export default App;

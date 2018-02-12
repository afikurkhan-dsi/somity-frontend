import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';

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
                <Route exact path="/login" component={LoginPage} />
                {localStorage.getItem('user') ? <Route path="/dashboard" component={Dashboard} /> :
                  <Redirect to='/login' /> }
              </div>
            </Router>
          </div>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

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
                <Route exact path="/" component={LoginPage} />
                <Route path="/dashboard" component={Dashboard} />
              </div>
            </Router>
          </div>
        </div>
    );
  }
}

export default App;

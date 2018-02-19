import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="">
          <div className="">
            <BrowserRouter>
              <div>
                <Route exact path="/login" component={LoginPage} />
                <Route path="/dashboard" component={Dashboard} />
              </div>
            </BrowserRouter>
          </div>
        </div>
    );
  }
}

export default App;

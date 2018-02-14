import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
// import { history } from '../helpers';

import './App.css';

const UserPage = () => <div><h1>Hello</h1></div>

class App extends Component {
  render() {
    return (
        <div className="">
          <div className="">
            <BrowserRouter>
              <div>
                <Switch>
                  <Route exact path="/login" component={LoginPage} />
                  {localStorage.getItem('user') ? <Route exact path="/dashboard" component={Dashboard} /> :
                    <Redirect to='/login' /> }
                    <Route path="/dashboard/:UserId" component={UserPage} />
                </Switch>
                
              </div>
            </BrowserRouter>
          </div>
        </div>
    );
  }
}

export default App;

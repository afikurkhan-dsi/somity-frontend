import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { UserCreatePage } from './pages/UserCreatePage';
import { Profile } from './pages/Profile';

import './App.css';

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
                    <Route path="/dashboard/users/create" component={UserCreatePage} />
                    <Route path="/dashboard/:UserId" component={Profile} />
                </Switch>
                
              </div>
            </BrowserRouter>
          </div>
        </div>
    );
  }
}

export default App;

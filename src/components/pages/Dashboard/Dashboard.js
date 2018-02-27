import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../actions';
import { Users } from '../Users';
import { UserCreatePage } from '../UserCreatePage';
import { Profile } from '../Profile';
import { Payments } from '../Payments';
import { SidebarNavigation } from './Navigation';
import { WelcomePage } from './../WelcomePage';
import * as styles from './Dashboard.css';

import FaHome from 'react-icons/lib/fa/home';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.logoutHandle = this.logoutHandle.bind(this);
  }

  logoutHandle() { 
    this.props.dispatch(userActions.logout());
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        {localStorage.getItem('user') ? null : <Redirect to='/login' /> }
    
        <nav className={[styles.navbar, "navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0"].join(' ')}>
          <Link 
            className={[styles.navbarBrand, "navbar-brand col-sm-3 col-md-2 mr-0"].join(' ')}
            to={`${match.url}`}>
            <FaHome /> Somity
          </Link>
          <input className={[styles.FormControl, styles.FormControlDark, "form-control form-control-dark w-100"].join(' ')} type="text" placeholder="Search" aria-label="Search" />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <Link to="/login" onClick={this.logoutHandle}>Sign out</Link>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <SidebarNavigation match={match}/>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <Switch>
                <Route exact path={`${match.url}`} component={WelcomePage} />
                <Route exact path={`${match.url}/users`} component={Users} />
                { this.props.created ?
                  <Redirect to={`${match.url}/users`} /> :
                  <Route exact path={`${match.url}/users/create`} component={UserCreatePage} />
                }
                <Route exact path={`${match.url}/users/:UserId`} component={Profile} />
                <Route path={`${match.url}/payments`} component={Payments} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, username } = state.authentication;
  return {
    user,
    username,
  }
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };

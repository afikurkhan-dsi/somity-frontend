import React from 'react';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../actions';
import { Users } from '../Users';
import { UserCreatePage } from '../UserCreatePage';
import { Profile } from '../Profile';
import { Payments } from '../Payments';

import * as styles from './Dashboard.css';

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
            Home
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
            <nav className={[styles.sidebar, "col-md-2 d-none d-md-block bg-light"].join(' ')}>
              <div className={styles.sidebarSticky}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink
                      exact
                      to={`${match.url}/users`}
                      className={styles.NavLink}
                      activeClassName={styles.active}>
                      Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      className={styles.NavLink}
                      activeClassName={styles.active} 
                      to="/dashboard/users/create">
                      Create New User
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={styles.NavLink}
                      activeClassName={styles.active}
                      to={`${match.url}/payments`}>
                      Payment Statistics
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
              </div>
              <Switch>
                <Route exact path={`${match.url}/users`} component={Users} />
                <Route exact path={`${match.url}/users/create`} component={UserCreatePage} />
                <Route path={`${match.url}/users/:UserId`} component={Profile} />
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
    username
  }
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };

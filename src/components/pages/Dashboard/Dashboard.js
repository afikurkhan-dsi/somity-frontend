import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../actions';
import { Users } from '../Users';
import { UserCreatePage } from '../UserCreatePage';
import { Profile } from '../Profile';
import { Payments } from '../Payments';

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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron">
              <h4>Hello Administrator! <small><Link to="/login" onClick={this.logoutHandle}>Logout</Link></small></h4>
              <hr className="my-4" />
              <p className="lead">
                <Link 
                  className="btn btn-primary btn-lg"
                  to={`${match.url}`}>
                  Home
                </Link>
                &nbsp;&nbsp;
                <Link
                  className="btn btn-primary btn-lg"
                  to={`${match.url}/users`}>
                  Users
                </Link>
                &nbsp;&nbsp;
                <Link
                  className="btn btn-primary btn-lg" 
                  to="/dashboard/users/create">
                  Create New User
                </Link>
                &nbsp;&nbsp;
                <Link
                  className="btn btn-primary btn-lg"
                  to={`${match.url}/payments`}>
                  Payment Statistics
                </Link>
              </p>
            </div>
            <Switch>
              <Route exact path={`${match.url}/users`} component={Users} />
              <Route exact path={`${match.url}/users/create`} component={UserCreatePage} />
              <Route path={`${match.url}/users/:UserId`} component={Profile} />
              <Route path={`${match.url}/payments`} component={Payments} />
            </Switch>
          </div>
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

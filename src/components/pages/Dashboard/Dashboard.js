import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../../helpers';
import { userActions } from '../../../actions';

const UserPage = () => <div>Userpage</div>

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.logoutHandle = this.logoutHandle.bind(this);
    this.loadUsers = this.loadUsers.bind(this);
  }

  loadUsers() {
    this.props.dispatch(userActions.getAll());
  }

  logoutHandle() { 
    this.props.dispatch(userActions.logout());
  }

  render() {
    const { users } = this.props;
    return (
      <div className="row">
        <div className="container">
          <div className="col-12">
            <div className="jumbotron">
              <h4>Hello Administrator! <small><Link to="/login" onClick={this.logoutHandle}>Logout</Link></small></h4>
              <hr className="my-4" />
              <p className="lead">
                <button
                  onClick={this.loadUsers}
                  className="btn btn-primary btn-lg">Load Users</button>
              </p>
            </div>

            {users.items &&
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {users.items.map((user, index) =>
                        <tr key={user._id}>
                            <td><Link to={`/dashboard/${user._id}`}>{user.Username}</Link></td>
                            <td>{user.FirstName}</td>
                            <td>{user.LastName}</td>
                            <td>{user.Email}</td>
                            <td>{user.Phone}</td>
                            <td>{user.Address}</td>
                        </tr>
                    )}
                </tbody>
              </table>
            }
            <Router history={history}>
              <Route path="/{UserId}" component={UserPage} />
            </Router>
        </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  const { user, username } = state.authentication;
  return {
    user,
    username,
    users
  }
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };

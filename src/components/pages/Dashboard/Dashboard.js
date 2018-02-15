import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../actions';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.logoutHandle = this.logoutHandle.bind(this);
    this.loadUsers = this.loadUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  loadUsers() {
    this.props.dispatch(userActions.getAll());
  }

  logoutHandle() { 
    this.props.dispatch(userActions.logout());
  }

  deleteUser(id) {
    this.props.dispatch(userActions.deleteUser(id));
    alert(id);
  }

  render() {
    const { users } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron">
              <h4>Hello Administrator! <small><Link to="/login" onClick={this.logoutHandle}>Logout</Link></small></h4>
              <hr className="my-4" />
              <p className="lead">
                <button
                  onClick={this.loadUsers}
                  className="btn btn-primary btn-lg">
                
                  Load Users
                </button>
                &nbsp;&nbsp;
                <Link
                  className="btn btn-primary btn-lg" 
                  to="/dashboard/users/create">Create New User</Link>
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
                    <th scope="col">Delete</th>
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
                            <td>
                              <button
                                onClick={() => this.deleteUser(user._id)} 
                                className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
              </table>
            }
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

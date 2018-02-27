import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

import { userActions } from '../../../actions';
import { Spinner } from '../../common';

import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(userActions.getAll());
  }

  deleteUser(user) {
    swal({
      title: "Are you sure?",
      text: `${user.FirstName} ${user.LastName} will be deleted permanently`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.props.dispatch(userActions.deleteUser(user._id));
        swal(`Poof! ${user.FirstName} ${user.LastName} has been deleted!`, {
          icon: "success",
        });
      }
    });
  }

  render() {
    const { users } = this.props;
    const { deleteUser } = this;

    return (
      <div>
        {users.loading ? <Spinner color={'#000'} /> : null}
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">Users</h1>
          <Link
            className="btn btn-primary"
            to="/dashboard/users/create">
            <FaPlusCircle /> New User
          </Link>
        </div>
       
        {users.items &&
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Username</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.items.map((user, index) =>
                <tr key={user._id}>
                    <td><Link to={`${this.props.match.url}/${user._id}`}>{user.Username}</Link></td>
                    <td>{user.FirstName}</td>
                    <td>{user.LastName}</td>
                    <td>{user.Email}</td>
                    <td>{user.Phone}</td>
                    <td>{user.Address}</td>
                    <td style={{whiteSpace: 'nowrap'}}>
                      <button
                        onClick={() => deleteUser(user)} 
                        className="btn btn-outline-danger btn-sm">Delete</button>
                      &nbsp;&nbsp;
                      <Link
                        to={`/dashboard/payments/users/${user._id}`}
                        className="btn btn-outline-primary btn-sm">Pay</Link>
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  }
}

const ConnectedUsers = connect(mapStateToProps)(Users);

export { ConnectedUsers as Users };

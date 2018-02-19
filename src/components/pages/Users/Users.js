import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userActions } from '../../../actions';
import { Spinner } from '../../common/Spinner';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  deleteUser(id) {
    this.props.dispatch(userActions.deleteUser(id));
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {users.loading ? <Spinner color={'#000'} /> : null}
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
                        <td><Link to={`${this.props.match.url}/${user._id}`}>{user.Username}</Link></td>
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

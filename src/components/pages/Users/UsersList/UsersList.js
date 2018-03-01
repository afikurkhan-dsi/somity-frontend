import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UsersList = ({ users=[], onDelete=f=>f }) => (
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
      {users.map((user, index) =>
        <tr key={user._id}>
            <td><Link to={`/dashboard/users/${user._id}`}>{user.Username}</Link></td>
            <td>{user.FirstName}</td>
            <td>{user.LastName}</td>
            <td>{user.Email}</td>
            <td>{user.Phone}</td>
            <td>{user.Address}</td>
            <td style={{whiteSpace: 'nowrap'}}>
              <button
                onClick={() => onDelete(user)} 
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
);

UsersList.propTypes = {
  users: PropTypes.array,
  onDelete: PropTypes.func
};

export { UsersList };

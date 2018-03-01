import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { UsersListRow } from './UsersListRow';

const UsersList = ({ users=[], onDelete=f=>f, onUpdate=f=>f }) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Phone Number</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {users.map((user, index) =>
        <UsersListRow key={`user-${user._id}`} user={user} onDelete={onDelete} onUpdate={onUpdate}/>
      )}
    </Table.Body>
  </Table>
);

UsersList.propTypes = {
  users: PropTypes.array,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
};

export { UsersList };

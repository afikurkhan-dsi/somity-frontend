import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
import FaTrash from 'react-icons/lib/fa/trash';

const UsersListRow = ({ user={}, onDelete=f=>f, onUpdate=f=>f }) => (
  <Table.Row>
    <Table.Cell>
      <Link to={`/dashboard/users/${user._id}`}>{user.Username}</Link>
    </Table.Cell>
    <Table.Cell>{user.FirstName}</Table.Cell>
    <Table.Cell>{user.LastName}</Table.Cell>
    <Table.Cell>{user.Email}</Table.Cell>
    <Table.Cell>{user.Phone}</Table.Cell>
    <Table.Cell>{user.Address}</Table.Cell>
    <Table.Cell style={{whiteSpace: 'nowrap'}}>
      <Button
        animated
        negative
        size='mini'
        onClick={() => onDelete(user)} 
      >
        <Button.Content visible>
          <FaTrash />
        </Button.Content>
        <Button.Content hidden>
          Delete
        </Button.Content>
      </Button>

      <Link
        to={`/dashboard/payments/users/${user._id}`}
        className="ui mini positive button"
      >
        Pay
      </Link>
    </Table.Cell>
  </Table.Row>
);

UsersListRow.propTypes = {
  user: PropTypes.object,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
}

export { UsersListRow };

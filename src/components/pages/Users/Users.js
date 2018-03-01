import React from 'react';
import { connect } from 'react-redux';
import { Divider, Button, Grid, Dimmer, Loader, Modal } from 'semantic-ui-react';
import swal from 'sweetalert';

import { userActions } from '../../../actions';
import { UserForm } from './../UserForm';
import { UsersList } from './UsersList';

import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(userActions.getAll());
  }

  createUser = (Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope) => {
    this.props.dispatch(userActions.create(Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope));
  }

  updateUser = (Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope) => {
    console.log('update user');
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
    const { createUser, deleteUser, updateUser } = this;
    
    return (
      <Grid divided='vertically' padded='horizontally'>
        <Grid.Row columns={1}>
          <Grid.Column>
            {users.loading ?
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer> : 
              null
            }
            <Grid padded='horizontally'>
              <Grid.Row>
                <h1 className="h2">Users</h1>
                <Modal trigger={<Button><FaPlusCircle /> New User</Button>}>
                  <Modal.Content>
                    <UserForm onSubmitForm={createUser}/>
                  </Modal.Content>
                </Modal>
              </Grid.Row>
            </Grid>
            <Divider />
            <UsersList
              users={users.items}
              onDelete={deleteUser}
              onUpdate={updateUser} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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

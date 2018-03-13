import React from 'react';
import { connect } from 'react-redux';
import { Divider, Button, Grid, Dimmer, Loader, Modal, Form } from 'semantic-ui-react';
import swal from 'sweetalert';

import { userActions } from '../../../actions';
import { UserForm } from './../UserForm';
import { UsersList } from './UsersList';

import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

class Users extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  componentWillMount() {
    this.props.dispatch(userActions.getAll());
  }

  createUser = (UserId, Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope) => {
    this.props.dispatch(userActions.create(Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope));
    this.handleClose();
  }

  updateUser = (UserId, Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope) => {
    this.props.dispatch(userActions.updateUser(UserId, FirstName, LastName, Email, Phone, Address, IsActive, Scope));
  }

  deleteUser = (user) => {
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

  handleSubmit = (e) => {
    e.preventDefault();

    const Username = this.refs.Username.value;
    const FirstName = this.refs.FirstName.value;
    const LastName = this.refs.LastName.value;
    const Email = this.refs.Email.value;
    const Phone = this.refs.Phone.value;
    
    this.props.dispatch(userActions.getAll(Username, FirstName, LastName, Email, Phone));
  }

  render() {
    const { users } = this.props;
    const { createUser, deleteUser, updateUser } = this;
    
    return (
      <Grid divided='vertically' padded='horizontally'>
        {users.loading ?
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer> : 
          null
        }
        <Grid.Row columns={1}>
          <Grid.Column>
            <h1 className="h2" style={{display: 'inline'}}>Users</h1>
            
            <Modal 
                open={this.state.modalOpen}
                onClose={this.handleClose} 
                size='tiny' 
                trigger={
                  <Button
                    primary
                    floated='right' 
                    onClick={this.handleOpen}>
                    <FaPlusCircle /> New User
                  </Button>
                }
            >
              <Modal.Content>
                <UserForm onSubmitForm={createUser}/>
              </Modal.Content>
            </Modal>
            <Divider />

            <Form size='small' onSubmit={this.handleSubmit}>
              <Form.Group inline>
                <Form.Field>
                  <label htmlFor="Username">Username</label>
                  <input 
                    ref='Username'
                    type="text"/>
                </Form.Field>

                <Form.Field>
                  <label htmlFor="FirstName">First Name</label>
                  <input 
                    ref='FirstName'
                    type="text"/>
                </Form.Field>

                <Form.Field>
                  <label htmlFor="LastName">Last Name</label>
                  <input 
                    ref='LastName'
                    type="text"/>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="Email">Email</label>
                  <input 
                    ref='Email'
                    type="text"/>
                </Form.Field>

                <Form.Field>
                  <label htmlFor="Phone">Phone</label>
                  <input 
                    ref='Phone'
                    type="text"/>
                </Form.Field>

                <Form.Field>
                  <label></label>
                  <Button type='submit'>Submit</Button>
                </Form.Field>
              </Form.Group>
            </Form>

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

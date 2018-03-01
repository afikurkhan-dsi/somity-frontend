import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import { userActions } from '../../../actions';
import { Spinner } from '../../common';
import { Modal } from './../../common/Modal';
import { UserForm } from './../UserForm';
import { UsersList } from './UsersList';

import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(userActions.getAll());
  }

  toggleModal = () => {
    this.setState((state, props) => ({showModal: !state.showModal}))
  }

  createUser = (Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope) => {
    this.props.dispatch(userActions.create(Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope));
    this.toggleModal();
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
    const { createUser, deleteUser, toggleModal } = this;
    const { showModal } = this.state;
    
    return (
      <div>
        {users.loading ? <Spinner color={'#000'} /> : null}
        <Modal show={showModal} onClose={toggleModal}>
          <UserForm onCreate={createUser}/>
        </Modal>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">Users</h1>
          <button
            className="btn btn-primary"
            onClick={ toggleModal }>
            <FaPlusCircle /> New User
          </button>
        </div>
        <UsersList 
          users={users.items}
          onDelete={deleteUser} />
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

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { userActions } from '../../../actions';

class UserCreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const Username = this.refs.Username.value;
    const FirstName = this.refs.FirstName.value;
    const LastName = this.refs.LastName.value;
    const Email = this.refs.Email.value;
    const Phone = this.refs.Phone.value;
    const Address = this.refs.Address.value;
    const Password = this.refs.Password.value;
    const IsActive = this.refs.IsActive.checked;
    const Scope = this.refs.Scope.value;

    this.props.dispatch(userActions.create(Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope));
  }

  render() {
    if(this.props.created) {
      return <Redirect to='/dashboard/users' />
    }
    return (
      <div className="CreateUserPage">
        <div className="row">
          <div className="col-6">
            <h3>Create New User</h3>
            <hr/>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="Username">Username</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="Username"
                  ref="Username"  
                  placeholder="Enter Username"
                  required/>
              </div>

              <div className="form-group">
                <label htmlFor="FirstName">First Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="FirstName"
                  ref="FirstName"  
                  placeholder="Enter FirstName"
                  required/>
              </div>
              
              <div className="form-group">
                <label htmlFor="LastName">Last Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="LastName"
                  ref="LastName"  
                  placeholder="Enter LastName"
                  required/>
              </div>

              <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="Email" 
                  ref="Email"
                  aria-describedby="emailHelp" 
                  placeholder="Enter email"
                  required/>
              </div>

              <div className="form-group">
                <label htmlFor="Phone">Phone</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="Phone"
                  ref="Phone"  
                  placeholder="Enter Phone"
                  required/>
              </div>

              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <textarea
                  className="form-control"
                  ref="Address"
                  id="Address"
                  cols="10"
                  rows="3"></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="Password"
                  ref="Password"
                  placeholder="Password"
                  required />
              </div>

              <div className="form-group">
                <label htmlFor="Scope">Select Type</label>
                <select name="Scope" id="Scope" ref="Scope" className="form-control">
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                </select>
              </div>
              
              <div className="form-check">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  id="IsActive"
                  ref="IsActive" />
                <label className="form-check-label" htmlFor="IsActive">IsActive ?</label>
              </div>

              <div className="form-group">
                <button 
                  type="submit" 
                  className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { created } = state.users;
  return {
    created
  }
}

const ConnectedUserCreatePage = connect(mapStateToProps)(UserCreatePage);
export { ConnectedUserCreatePage as UserCreatePage };

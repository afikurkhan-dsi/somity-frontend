import React from 'react';
import { connect } from 'react-redux';

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

    this.props.dispatch(userActions.create(Username, FirstName, LastName, Email, Phone, Address, Password, IsActive));
  }
  
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1>Create New User</h1>
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

              <div className="form-check">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  id="IsActive"
                  ref="IsActive" />
                <label className="form-check-label" htmlFor="IsActive">IsActive ?</label>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const ConnectedUserCreatePage = connect()(UserCreatePage);
export { ConnectedUserCreatePage as UserCreatePage };

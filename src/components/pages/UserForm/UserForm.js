import React from 'react';
import { PropTypes } from 'prop-types';

class UserForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const Username = this.refs.Username.value,
          FirstName = this.refs.FirstName.value,
          LastName = this.refs.LastName.value,
          Email = this.refs.Email.value,
          Phone = this.refs.Phone.value,
          Address = this.refs.Address.value,
          Password = this.refs.Password.value,
          IsActive = this.refs.IsActive.checked,
          Scope = this.refs.Scope.value;
    this.props.onCreate(Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope);
  }

  render() {
    return (
      <div className="CreateUserPage">
        <div className="row">
          <div className="col-12">
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

UserForm.propTypes = {
  onCreate: PropTypes.func
};

UserForm.defaultProps = {
  onCreate: f => f
}

export { UserForm };

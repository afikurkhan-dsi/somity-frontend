import React from 'react';
import { PropTypes } from 'prop-types';
import { Grid, Form, Button } from 'semantic-ui-react';

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
    this.props.onSubmitForm(this.props._id, Username, FirstName, LastName, Email, Phone, Address, Password, IsActive, Scope);
  }

  render() {
    const { _id, Username, FirstName, LastName, Email, Phone, Address, Scope } = this.props;
    const submitBtnName = _id ? 'Update User' : 'Create User';
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor="Username">Username</label>
                <input 
                  type="text" 
                  id="Username"
                  ref="Username"  
                  placeholder="Enter Username"
                  defaultValue={Username}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="FirstName">First Name</label>
                <input 
                  type="text" 
                  id="FirstName"
                  ref="FirstName"  
                  placeholder="Enter FirstName"
                  defaultValue={FirstName}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="LastName">Last Name</label>
                <input 
                  type="text" 
                  id="LastName"
                  ref="LastName"
                  placeholder="Enter LastName"
                  defaultValue={LastName}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="Email">Email address</label>
                <input 
                  type="email" 
                  id="Email" 
                  ref="Email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  defaultValue={Email}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="Phone">Phone</label>
                <input 
                  type="text"
                  id="Phone"
                  ref="Phone"  
                  placeholder="Enter Phone"
                  defaultValue={Phone}
                  required/>
              </Form.Field>
              <Form.Field>
                <label htmlFor="Address">Address</label>
                <textarea
                  ref="Address"
                  id="Address"
                  cols="10"
                  rows="3"
                  defaultValue={Address}></textarea>
              </Form.Field>
              <Form.Field>
                <label htmlFor="Password">Password</label>
                <input 
                  type="password" 
                  id="Password"
                  ref="Password"
                  placeholder="Password"
                  required />
              </Form.Field>
              <Form.Field>
                <label htmlFor="Scope">Select Type</label>
                <select name="Scope" id="Scope" ref="Scope" defaultValue={Scope}>
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                </select>
              </Form.Field>
              <Form.Field>
                <div className="ui checkbox">
                  <input 
                    type="checkbox" 
                    id="IsActive"
                    ref="IsActive" />
                  <label htmlFor="IsActive">IsActive ?</label>
                </div>
              </Form.Field>
              <Form.Field>
                <Button
                  primary 
                  type="submit"
                >
                  { submitBtnName }
                </Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

UserForm.propTypes = {
  onSubmitForm: PropTypes.func
};

UserForm.defaultProps = {
  onSubmitForm: f => f
}

export { UserForm };

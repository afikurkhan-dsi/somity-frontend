import React from 'react';
import { connect } from 'react-redux';
import { Button, Divider, Table, Form } from 'semantic-ui-react';

import { paymentActions } from './../../../../actions';

class PaymentDue extends React.Component {
  componentDidMount() {
    this.props.dispatch(paymentActions.getPaymentDue());
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    const Username = this.refs.Username.value;
    const FirstName = this.refs.FirstName.value;
    const LastName = this.refs.LastName.value;
    const Email = this.refs.Email.value;
    const Phone = this.refs.Phone.value;
    
    this.props.dispatch(paymentActions.getPaymentDue(Username, FirstName, LastName, Email, Phone));
  }
  render() {
    const { dues } = this.props;
    return (
      <div>
        <h2>Payment Dues</h2>
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

        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>FirstName</Table.HeaderCell>
              <Table.HeaderCell>LastName</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Current Due</Table.HeaderCell>
              <Table.HeaderCell>Total Paid</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {dues && dues.map(user =>
              <Table.Row key={`user-dues-${user._id}`}>
                <Table.Cell>{user.Username}</Table.Cell>
                <Table.Cell>{user.FirstName}</Table.Cell>
                <Table.Cell>{user.LastName}</Table.Cell>
                <Table.Cell>{user.Phone}</Table.Cell>
                <Table.Cell>{user.Address}</Table.Cell>
                <Table.Cell>{user.CurrentDueAmount}</Table.Cell>
                <Table.Cell>{user.TotalPaidAmount}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { dues } = state.payment;
  return {
    dues
  } 
}

const connectedPaymentDue = connect(mapStateToProps)(PaymentDue);
export { connectedPaymentDue as PaymentDue };

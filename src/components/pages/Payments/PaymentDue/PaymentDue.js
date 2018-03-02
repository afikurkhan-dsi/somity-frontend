import React from 'react';
import { connect } from 'react-redux';
import { Divider, Table } from 'semantic-ui-react';

import { paymentActions } from './../../../../actions';

class PaymentDue extends React.Component {
  componentDidMount() {
    this.props.dispatch(paymentActions.getPaymentDue());
  }
  render() {
    const { dues } = this.props;
    console.log(dues);
    return (
      <div>
        <h2>Payment Dues</h2>
        <Divider />
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>FirstName</Table.HeaderCell>
              <Table.HeaderCell>LastName</Table.HeaderCell>
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

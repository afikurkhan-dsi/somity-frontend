import React from 'react';
import { Divider, Table } from 'semantic-ui-react';
import { getDateFromString } from '../../../common/DateTime/DateTime';

export function IndividualPaymentHistory({payments}) {
  return (
    <div className='IndividualPaymentHistory'>
      <h2>Payments</h2>
      <Divider />

      {payments.length === 0 ? 
        <p style={{color: 'red'}}>No payment history found</p> :
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Payment Date</Table.HeaderCell>
              <Table.HeaderCell>Payment Amount</Table.HeaderCell>
              <Table.HeaderCell>Submitted By</Table.HeaderCell>
              <Table.HeaderCell>Submitter Note</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {payments.map((payment, i) =>
              <Table.Row key={`payment-${payment._id}`}>
                <Table.Cell>{i+1}</Table.Cell>
                <Table.Cell>{getDateFromString(payment.PaymentDate)}</Table.Cell>
                <Table.Cell>{payment.PaymentAmount}</Table.Cell>
                <Table.Cell>{payment.SubmittedBy}</Table.Cell>
                <Table.Cell>{payment.SubmitterNote}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      }
    </div> 
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Divider, Form, Button } from 'semantic-ui-react'

import { getDateFromString, getBDTCurrency } from './../../../common';
import { paymentActions } from './../../../../actions';

class TransactionHistory extends React.Component {
  componentWillMount() {
    this.props.dispatch(paymentActions.getStatistics('', ''));
  }
  
  historyFormHandler = () => {
    const FromDate = this.refs.FromDate.value;
    const ToDate = this.refs.ToDate.value;
    this.props.dispatch(paymentActions.getStatistics(FromDate, ToDate));
  }

  render() {
    const { statistics } = this.props;
    return (
      <div>
        <div>
          <h2>Transaction History</h2>
          <Divider />
        </div>
        <Form onSubmit={this.historyFormHandler}>
          <Form.Group inline>
            <Form.Field>
              <label htmlFor="FromDate">From Date</label>
              <input 
                ref='FromDate'
                type="date"/>
            </Form.Field>

            <Form.Field>
              <label htmlFor="ToDate">To Date</label>
              <input 
                ref='ToDate'
                type="date"/>
            </Form.Field>

            <Form.Field>
              <Button type='submit'>Submit</Button>
            </Form.Field>
          </Form.Group>
        </Form>

        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Payment Date</Table.HeaderCell>
              <Table.HeaderCell>Payment Amount</Table.HeaderCell>
              <Table.HeaderCell>Submitted By</Table.HeaderCell>
              <Table.HeaderCell>Submitted For</Table.HeaderCell>
              <Table.HeaderCell>Submitter Note</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {statistics && statistics.map((data, i) => 
              <Table.Row key={data._id}>
                <Table.Cell>{i+1}</Table.Cell>
                <Table.Cell>{getDateFromString(data.PaymentDate)}</Table.Cell>
                <Table.Cell>{getBDTCurrency(data.PaymentAmount)}</Table.Cell>
                <Table.Cell>{data.SubmittedBy}</Table.Cell>
                <Table.Cell>{data.SubmittedFor}</Table.Cell>
                <Table.Cell>{data.SubmitterNote}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

TransactionHistory.propTypes = {
  statistics: PropTypes.array
}

function mapStateToProps(state) {
  const { statistics } = state.payment
  return {
    statistics
  }
}

const connectedTransactionHistory = connect(mapStateToProps)(TransactionHistory);
export { connectedTransactionHistory as TransactionHistory };

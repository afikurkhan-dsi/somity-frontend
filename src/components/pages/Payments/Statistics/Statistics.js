import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Divider } from 'semantic-ui-react'

import { getDateFromString, getBDTCurrency } from './../../../common';
import { paymentActions } from './../../../../actions';

class Statistics extends React.Component {
  componentWillMount() {
    this.props.dispatch(paymentActions.getStatistics('', ''));
  }
  render() {
    const { statistics } = this.props;
    return (
      <div>
        <div>
          <h2>Transaction History</h2>
          <Divider />
        </div>
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

Statistics.propTypes = {
  statistics: PropTypes.array
}

function mapStateToProps(state) {
  const { statistics } = state.payment
  return {
    statistics
  }
}

const connectedStatistics = connect(mapStateToProps)(Statistics);
export { connectedStatistics as Statistics };

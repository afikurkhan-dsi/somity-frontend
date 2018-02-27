import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getDateFromString, getBDTCurrency } from './../../../common';
import { paymentActions } from './../../../../actions';

class Statistics extends React.Component {
  componentWillMount() {
    this.props.dispatch(paymentActions.getStatistics('', ''));
  }
  render() {
    const { statistics } = this.props;
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Payment Date</th>
            <th scope="col">Payment Amount</th>
            <th scope="col">Submitted By</th>
            <th scope="col">Submitted For</th>
            <th scope="col">Submitter Note</th>
          </tr>
        </thead>
        <tbody>
          { statistics && statistics.map((data, i) => 
            <tr key={data._id}>
              <th scope="row">{i+1}</th>
              <td>{getDateFromString(data.PaymentDate)}</td>
              <td>{getBDTCurrency(data.PaymentAmount)}</td>
              <td>{data.SubmittedBy}</td>
              <td>{data.SubmittedFor}</td>
              <td>{data.SubmitterNote}</td>
            </tr>
          )}
        </tbody>
      </table>
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

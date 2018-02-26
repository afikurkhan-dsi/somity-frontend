import React from 'react';
import { connect } from 'react-redux';

import { paymentActions } from '../../../actions';
import { Statistics } from './Statistics';

class Payments extends React.Component {
  componentWillMount() {
    this.props.dispatch(paymentActions.getStatistics('', ''));
  }

  render() {
    const { statistics } = this.props;

    return (
      <div className="Payment">
        <Statistics statistics={statistics} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { statistics } = state.payment
  return {
    statistics
  }
}

const connectedPayments = connect(mapStateToProps)(Payments);
export { connectedPayments as Payments };

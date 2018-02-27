import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import { paymentActions } from './../../../../actions';

class PayForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitPayment = this.submitPayment.bind(this);
  }
  
  submitPayment(e) {
    e.preventDefault();
    const UserId = this.props.match.params.UserId,
          PaymentDate = moment().format('YYYY-MM-D'),
          PaymentAmount  =this.refs.PaymentAmount.value,
          SubmitterNote = this.refs.SubmitterNote.value,
          SubmittedBy = JSON.parse(localStorage.getItem('username'));
    this.props.dispatch(
      paymentActions.pay(UserId, PaymentAmount, PaymentDate, SubmittedBy, SubmitterNote)
    );
  }

  render() {
    const { paid } = this.props;
    const { submitPayment } = this;
    return (
      <div className="row">
        {paid ? <Redirect to='/dashboard/payments'/> : null }
        <div className="col-md-5">
          <form onSubmit={submitPayment}>
            <div className="form-group">
              <label htmlFor="PaymentAmount">Payment Amount</label>
              <input
                type="number"
                ref="PaymentAmount"
                id="PaymentAmount"
                className="form-control"
                required />
            </div>

            <div className="form-group">
              <label htmlFor="SubmitterNote">Note</label>
              <textarea 
                ref="SubmitterNote"
                id="SubmitterNote"
                className="form-control"
                rows="3"></textarea>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary">Submit Paymnet</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { payment } = state;
  return {
    paid: payment.paid,
  }
}

const connectPayForm = connect(mapStateToProps)(PayForm);
export { connectPayForm as PayForm };

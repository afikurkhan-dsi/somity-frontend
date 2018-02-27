import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import { userActions } from './../../../../actions';
import { paymentActions } from './../../../../actions';

class PayForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitPayment = this.submitPayment.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(userActions.getAll());
  }

  submitPayment(e) {
    e.preventDefault();
    const UserId = this.props.match.params.UserId,
          PaymentDate = moment().format('YYYY-MM-D'),
          PaymentAmount  =this.refs.PaymentAmount.value,
          SubmitterNote = this.refs.SubmitterNote.value,
          SubmittedBy = this.refs.SubmittedBy.value;
    
    this.props.dispatch(
      paymentActions.pay(UserId, PaymentAmount, PaymentDate, SubmittedBy, SubmitterNote)
    );
  }

  render() {
    const { users, paid } = this.props;
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
              <label htmlFor="SubmittedBy.value">Submitted By</label>
              <select
                className="form-control" 
                id="SubmittedBy"
                ref="SubmittedBy">
                {users && users.map(user => 
                  <option 
                    key={user._id}
                    value={user._id}>
                    {user.FirstName} {user.LastName}
                  </option>
                )}
              </select>
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
  const { users, payment } = state;
  return {
    users: users.items,
    paid: payment.paid
  }
}

const connectPayForm = connect(mapStateToProps)(PayForm);
export { connectPayForm as PayForm };

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Grid } from 'semantic-ui-react';

import { paymentActions } from './../../../../actions';

class PayForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitPayment = this.submitPayment.bind(this);
  }
  
  submitPayment(e) {
    e.preventDefault();
    const UserId = this.props.match.params.UserId,
          PaymentDate = this.refs.PaymentDate.value,
          PaymentAmount = this.refs.PaymentAmount.value,
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
      <Grid>
        {paid ? <Redirect to='/dashboard/payments'/> : null }
        <Grid.Column width={6}>
          <Form onSubmit={submitPayment}>
            <Form.Field>
              <label htmlFor="PaymentAmount">Payment Amount</label>
              <input
                type="number"
                ref="PaymentAmount"
                id="PaymentAmount"
                required />
            </Form.Field>

            <Form.Field>
              <label htmlFor="PaymentDate">Payment Date</label>
              <input
                type="date"
                ref="PaymentDate"
                id="PaymentDate"
                required />
            </Form.Field>

            <Form.Field>
              <label htmlFor="SubmitterNote">Note</label>
              <textarea 
                ref="SubmitterNote"
                id="SubmitterNote"
                rows="3"></textarea>
            </Form.Field>

            <Form.Field>
              <Button
                type="submit"
                primary>Submit Paymnet</Button>
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

import { userActions, paymentActions } from '../../../actions';
import { UserInfo } from './UserInfo';
import { IndividualPaymentHistory } from './IndividualPaymentHistory';

class Profile extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.get(this.props.match.params.UserId));
    this.props.dispatch(paymentActions.getPaymenById(this.props.match.params.UserId));
  }
  render() {
    const { payments, user } = this.props;
    return (
      <Grid padded='horizontally'>
        <Grid.Row>
          <Grid.Column>
            { user &&
              <UserInfo user={user}/>
            }
            <br/><br/>
            {payments &&
              <IndividualPaymentHistory payments={payments} />
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.users;
  const { payments } = state.payment
  return {
    user,
    payments
  }
}

const ConnectedProfile = connect(mapStateToProps)(Profile);

export { ConnectedProfile as Profile };

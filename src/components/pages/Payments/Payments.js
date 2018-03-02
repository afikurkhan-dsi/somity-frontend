import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import { Statistics } from './Statistics';
import { PayForm } from './PayForm';
import { PaymentDue } from './PaymentDue';

class Payments extends React.Component {
  render() {
    const { match } = this.props;
  
    return (
       <Grid divided='vertically' padded='horizontally'>
        <Grid.Row>
          <Grid.Column>
            <div className="Payment">
              <Switch>
                <Route exact path={`${match.url}`} component={Statistics} />
                <Route exact path={`${match.url}/payment_dues`} component={PaymentDue} />
                <Route path={`${match.url}/users/:UserId`} component={PayForm} />
              </Switch>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export { Payments };

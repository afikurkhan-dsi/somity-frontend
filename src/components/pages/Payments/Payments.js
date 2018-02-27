import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Statistics } from './Statistics';
import { PayForm } from './PayForm';

class Payments extends React.Component {
  render() {
    const { match } = this.props;
  
    return (
      <div className="Payment">
        <Switch>
          <Route exact path={`${match.url}`} component={Statistics} />
          <Route path={`${match.url}/users/:UserId`} component={PayForm} />
        </Switch>
      </div>
    );
  }
}

export { Payments };

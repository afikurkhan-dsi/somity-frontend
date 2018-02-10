import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.logoutHandle = this.logoutHandle.bind(this);
  }

  logoutHandle() { 
    this.props.dispatch(userActions.logout());
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
          <h1>Hi User!</h1>
          <p>You're logged in!!</p>
          
          <p>
              <Link to="/" onClick={this.logoutHandle}>Logout</Link>
          </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user
  }
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };

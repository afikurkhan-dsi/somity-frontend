import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.logoutHandle = this.logoutHandle.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  logoutHandle() { 
    this.props.dispatch(userActions.logout());
  }

  render() {
    const { users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
          <h1>Hi User!</h1>
          <p>You're logged in!!</p>
          
          <p>
              <Link to="/login" onClick={this.logoutHandle}>Logout</Link>
          </p>

          <ul>
          {users.items &&
              <ul>
                  {users.items.map((user, index) =>
                      <li key={index}>
                          {user.FirstName + ' ' + user.LastName}
                      </li>
                  )}
              </ul>
            }
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;

  return {
    users
  }
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };

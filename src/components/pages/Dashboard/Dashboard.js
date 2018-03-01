import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, Menu } from 'semantic-ui-react';

import { userActions } from '../../../actions';
import { Users } from '../Users';
import { Profile } from '../Profile';
import { Payments } from '../Payments';
import { SidebarNavigation } from './Navigation';
import { WelcomePage } from './../WelcomePage';
import * as styles from './Dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.logoutHandle = this.logoutHandle.bind(this);
  }

  logoutHandle() { 
    this.props.dispatch(userActions.logout());
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        {localStorage.getItem('user') ? null : <Redirect to='/login' /> }

        <div className="container-fluid">
          <div className="row">
            <SidebarNavigation
              match={match}/>

            <main className={styles.Main}>
              <Menu size='small'>
                <Menu.Menu position='right'>
                <Dropdown item text='Admin'>
                <Dropdown.Menu>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/login" onClick={this.logoutHandle}>Sign out</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Menu.Menu>
              </Menu>

              <Switch>
                <Route exact path={`${match.url}`} component={WelcomePage} />
                <Route exact path={`${match.url}/users`} component={Users} />
                <Route exact path={`${match.url}/users/:UserId`} component={Profile} />
                <Route path={`${match.url}/payments`} component={Payments} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, username } = state.authentication;
  return {
    user,
    username,
  }
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };

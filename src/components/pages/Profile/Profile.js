import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Divider } from 'semantic-ui-react'

import { userActions } from '../../../actions';

class Profile extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.get(this.props.match.params.UserId))
  }
  render() {
    return (
      <Grid padded='horizontally'>
        <Grid.Row>
          <Grid.Column>
            <h2>Profile</h2>
            <Divider />

            { this.props.user &&
            <div className="userInfo">
              <Image src="http://via.placeholder.com/150x150" circular/>
              <div className="text-center">
                <h3 style={{fontWeight: '700'}}>{this.props.user.FirstName} {this.props.user.LastName}</h3>
                <address>
                  {this.props.user.Address}
                </address>
                <p>{this.props.user.Phone} &#9675; {this.props.user.Email}</p>
              </div>
            </div>
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.users;
  return {
    user
  }
}

const ConnectedProfile = connect(mapStateToProps)(Profile);

export { ConnectedProfile as Profile };

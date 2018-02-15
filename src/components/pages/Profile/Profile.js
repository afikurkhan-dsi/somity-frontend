import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../actions';

class Profile extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.get(this.props.match.params.UserId))
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Profile</h1>
            <hr/>
            { this.props.user &&
            <div className="userInfo">
              <img src="http://via.placeholder.com/150x150" className="img-thumbnail rounded-circle mx-auto d-block" alt=""/>
              <div className="text-center">
                <h3 style={{fontWeight: '700'}}>{this.props.user.FirstName} {this.props.user.LastName}</h3>
                <address>
                  {this.props.user.Address}
                </address>
                <p>{this.props.user.Phone} &#9675; {this.props.user.Email}</p>
                <Link style={{textTransform: 'uppercase'}} to={`/dashboard/${this.props.user._id}/edit`}>Edit profile</Link>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    )
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

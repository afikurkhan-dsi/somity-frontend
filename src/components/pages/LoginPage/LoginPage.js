import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { userActions } from '../../../actions';
import { Spinner } from '../../common';
import * as styles from './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
        dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div>
        {localStorage.getItem('user') ? <Redirect to='/dashboard' /> : null}
        <div  className={styles.LoginPage}>
          <div style={{width: '380px'}}>
              <h2 className={styles.LoginPageTitle}>Login</h2>
              <form name="form" onSubmit={this.handleSubmit}>
                  <div className={[styles.FormGroup, (submitted && !username ? styles.HasError : '')].join(' ')}>
                      <input 
                        type="text" 
                        className={styles.FormControl} 
                        name="username" 
                        value={username} 
                        onChange={this.handleChange}
                        placeholder="Username" />
                      
                      {submitted && !username &&
                          <div className={styles.HelpBlock}>Username is required</div>
                      }
                  </div>
                  <div className={[styles.FormGroup, (submitted && !password ? styles.HasError : '')].join(' ')}>
                      <input 
                        type="password" 
                        className={styles.FormControl} 
                        name="password" 
                        value={password} 
                        onChange={this.handleChange} 
                        placeholder="Password"/>

                      {submitted && !password &&
                          <div className={styles.HelpBlock}>Password is required</div>}
                  </div>
                  <div className={styles.FormGroup}>
                      <button type="submit" className={styles.LoginButton}>
                        Login
                        {loggingIn && <Spinner />}
                      </button>
                  </div>
              </form>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
      loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage)
export { connectedLoginPage as LoginPage };

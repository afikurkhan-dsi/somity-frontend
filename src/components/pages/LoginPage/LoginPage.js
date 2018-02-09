import React from 'react';

import * as styles from './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false,
      loggingIn: false
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
    this.setState({ submitted: true, loggingIn: true});
  }

  render() {
    const { username, password, submitted, loggingIn } = this.state;
    return (
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
                      {loggingIn && <div className={styles.Loader}>Loading...</div>}
                    </button>
                </div>
            </form>
          </div>
      </div>
    );
  }
}

export {LoginPage};

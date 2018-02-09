import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
          <h1>Hi User!</h1>
          <p>You're logged in!!</p>
          
          <p>
              <a href="">Logout</a>
          </p>
      </div>
    );
  }
}

export { Dashboard };

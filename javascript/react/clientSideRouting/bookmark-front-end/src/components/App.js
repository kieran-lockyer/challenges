import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Auth from './Auth'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
    }
  }

  loggedIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    return (
      <div>
        <h1>Welcome to the whatevs</h1>
        {isLoggedIn ? (
          <Redirect to='/bookmarks' />
        ) : (
            <Auth loggedIn={this.loggedIn} />
          )}
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Explore from './Explore'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'

export class Frontpage extends Component {
  render() {
    return (
      <div>
        <Route 
          path="/" 
          exact component={Home} 
        />
        <Route 
          path="/explore" 
          component={Explore} 
        />
        <Route 
          path="/signup" 
          component={Signup} 
        />
        <Route 
          path="/login" 
          render={() => (
            <Login 
              cookies={this.props.cookies}
              handleLogin={this.props.handleLogin}
            />
          )} 
        />
        <Route 
          path="/dashboard" 
          component={Dashboard} 
        />
      </div>
    )
  }
}

export default Frontpage

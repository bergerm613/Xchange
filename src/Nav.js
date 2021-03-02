import './App.css'
import React, { Component } from "react"
import { Link } from "react-router-dom"
import { GoogleLogout, GoogleLogin } from 'react-google-login';

class Nav extends Component {
  render() {
    return (
      <div className="nav_bar">
        <Link to="/" className="nav_item float_left size_40">Xchange</Link>

        {this.props.isUserLoggedIn ?
          <>
            <GoogleLogout
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={this.props.removeTokenId}
              render={renderProps => (
                <div
                  className="nav_item float_right size_21 margin_left15"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}>
                  Logout
                </div>
              )}
            />
            <Link to="/newpost" className="nav_item float_right size_21 margin_left15">List</Link>
          </>
          :
          <GoogleLogin
            clientId="772012762950-m86upnln04r8raf4da9r2kgt9o8sm377.apps.googleusercontent.com"
            render={renderProps => (
              <div
                className="nav_item float_right size_21 margin_left15"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}>
                Login
              </div>
            )}
            onSuccess={(response) => { this.props.setTokenId(response.tokenId) }}
            onFailure={(response) => console.log(response)}
            cookiePolicy={'single_host_origin'}
          />
        }

        <Link to="/" className="nav_item size_21 float_right">Browse</Link>
      </div>
    )
  }
}

export default Nav

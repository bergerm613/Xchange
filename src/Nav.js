import './App.css'
import React, { Component } from "react"
import { Link } from "react-router-dom"

class Nav extends Component {
  render() {
    return (
      <div>
          <div>XChange!</div>
          <Link to="/">Browse</Link>
          <div/>
          <Link to="/newpost">New Post</Link>
      </div>
    )
  }
}

export default Nav

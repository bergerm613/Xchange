import './App.css'
import React, { Component } from "react"
import { Link } from "react-router-dom"

class Nav extends Component {
  render() {
    return (
        <div className="nav_bar">
          <Link to="/" className="nav_item float_left size_40">Xchange</Link>

          <Link to="/newpost" className="nav_item float_right size_21 margin_left15">List</Link>
          <Link to="/" className="nav_item size_21 float_right">Browse</Link>
        </div>
    )
  }
}

export default Nav

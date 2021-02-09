import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Footer extends Component {
    render() {
        return (
            <div className="footer flex">
                <div className="flex column">
                    <div>Site Map:</div>
                    <Link to="/newpost" className="">List</Link>
                    <Link to="/" className="">Browse</Link>
                </div>
                
                <div>Text describing the project, links to code, and contributers.</div>
            </div>
        );
    }
}

export default Footer

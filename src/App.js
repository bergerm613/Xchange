import './App.css'
import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import FeedPage from './FeedPage'
import NewPostPage from './NewPostPage'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav/>

        <Switch>
            <Route exact path="/" component={FeedPage} /> 
            <Route exact path="/newpost" component={NewPostPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

import './App.css'
import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import FeedPage from './FeedPage'
import NewPostPage from './NewPostPage'
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenId: '',
    };
  }

  setTokenId(id) {
    this.setState({ tokenId: id })
  }

  removeTokenId() {
    if (this.state.tokenId !== '') {
      this.setState({ tokenId: '' })
    }
  }

  isUserLoggedIn() {
    return !(this.state.tokenId === '')
  }

  render() {
    return (
      <div className="clothing_image">
        <BrowserRouter>
          <Nav
            setTokenId={(id) => this.setTokenId(id)} 
            removeTokenId={() => this.removeTokenId()}
            isUserLoggedIn={this.isUserLoggedIn()}
          />

          <Switch>
            <Route exact path="/">
              <FeedPage isUserLoggedIn={this.isUserLoggedIn()} />
            </Route>

            <Route exact path="/newpost">
              <NewPostPage isUserLoggedIn={this.isUserLoggedIn()} />
            </Route>
          </Switch>

          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App

import './App.css'
import React, { Component } from "react"

class NewPostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.title);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="spartan list_an_item">List an Item</div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
          <input
              type="text"
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewPostPage

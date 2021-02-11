import './App.css'
import React, { Component } from "react"

class NewPostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.title + ' ' + this.state.description);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="spartan list_an_item">List an Item</div>

        <form className="form_container" onSubmit={this.handleSubmit}>
          <input
            className="input_title"
            placeholder="Title"
            type="text"
            required="true"
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })} />

          <textarea
            className="description_text_area"
            rows="10"
            cols="30"
            required="true"
            placeholder="Description"
            value={this.state.description}
            onChange={event => this.setState({ description: event.target.value })} />

          <input className="submit_btn" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewPostPage

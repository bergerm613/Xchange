import './App.css'
import React, { Component } from "react"

class NewPostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      imageFile: '',
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    const hiddenFileInput = React.createRef();
  }

  fileUploaded(event) {
    const file = event.target.files[0];
    this.setState({ imageFile: file });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.title + ' ' + this.state.description);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="spartan list_an_item">List an Item</div>

        <div className="form_and_par flex">
          <form className="form_container" onSubmit={this.handleSubmit}>
            <input
              className="input_title"
              placeholder="Title"
              type="text"
              required="true"
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })} />

            <button onClick={this.fileUploaded}>Upload Image File</button>

            <input
              style={{ display: 'none' }}
              type="file"
              accept="image/png, image/jpeg"
              ref={this.hiddenFileInput} />

            <textarea
              className="description_text_area"
              rows="10"
              cols="30"
              required="true"
              placeholder="Description"
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })} />

            <input className="submit_btn spartan size_21" type="submit" value="Submit" />
          </form>
          <div className="txt_paragraph spartan size_21">
            Hey there! <br /> <br />
            We’ll probably want some text here explaining the process of posting a new listing,
            but for now, this will do. <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    )
  }
}

export default NewPostPage

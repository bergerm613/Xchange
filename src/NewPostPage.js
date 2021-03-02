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

    this.handleSubmit = this.handleSubmit.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
  }

  uploadFile(event) {
    const file = event.target.files[0];
    this.setState({ imageFile: file });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.title + ' ' + this.state.description);
    event.preventDefault();
  }

  render() {
    if (this.props.isUserLoggedIn) {
      return (
        <div>
          <div className="spartan list_an_item">List an Item</div>

          <div className="form_and_par flex">
            <form className="form_container" onSubmit={this.handleSubmit}>
              <input
                className="input_title"
                placeholder="Title"
                type="text"
                required={true}
                value={this.state.title}
                onChange={event => this.setState({ title: event.target.value })} />

              <label htmlFor="fileUpload" className="image_file">
                {this.state.imageFile === '' ? 'Upload Image File' : 'File Uploaded!'}
              </label>
              <input
                style={{ display: 'none' }}
                type="file"
                id="fileUpload"
                accept="image/png, image/jpeg"
                onChange={this.uploadFile} />

              <textarea
                className="description_text_area"
                rows="10"
                cols="30"
                required={true}
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

    // in case the user isn't logged in, but goes straight to the /newpost url
    else {
      return (
        <div className="log_in">Log in to create a new post</div>
      )
    }

  }
}

export default NewPostPage

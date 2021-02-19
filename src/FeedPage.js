import './App.css'
import React, { Component } from "react"
import FeedItem from './FeedItem'

class FeedPage extends Component {
  constructor(props) {
    super(props)
    this.state={
      items:[{name: "Cute Top", description: "This is a description of a cute top", date: "02/04/2021", image:'http://placekitten.com/200/200', email: "john.smith@gmail.com"}, 
             {name: "Cuter Top", description: "This is a BETTER description of a cuter top", date: "02/05/2021", image:'http://placekitten.com/g/200/200', email: "sandra.ray@gmail.com"}]
    }
  }
  render() {
    return (
      <div className="feed_page">
        <div className="feed_quote">"Style is something each of us already has, all we need to do is find it." —Diane von Furstenberg</div>
        {
          this.state.items.map((item, index) => {
            return (
              <FeedItem 
                name={item.name} 
                description={item.description}
                date={item.date}
                image={item.image}
                email={item.email}
              />
              )
          })
        }
      </div>
    )
  }
}

export default FeedPage

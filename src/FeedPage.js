import './App.css'
import React, { Component } from "react"
import FeedItem from './FeedItem'

class FeedPage extends Component {
  constructor(props) {
    super(props)
    this.state={
      items:[{itemName: "Cute Top", description: "This is a description of a cute top", date: "02/04/2021", image:'http://placekitten.com/200/200'}, 
             {itemName: "Cuter Top", description: "This is a BETTER description of a cuter top", date: "02/05/2021", image:'http://placekitten.com/g/200/200'}]
    }
  }
  render() {
    return (
      <div className="feed_page">
        <div className="feed_quote">Insprational Quote Goes Here</div>
        {
          this.state.items.map((item, index) => {
            return (
            <FeedItem 
              itemName={item.itemName} 
              description={item.description}
              date={item.date}
              image={item.image}
            />
            )
          })
        }
      </div>
    )
  }
}

export default FeedPage

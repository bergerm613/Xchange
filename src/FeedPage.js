import './App.css'
import React, { Component } from "react"
import FeedItem from './FeedItem'

class FeedPage extends Component {
  constructor(props) {
    super(props)
    this.state={
      items:[{itemName: "Cute Top", description: "This is a description of a cute top", date: "02/04/2021"}]
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
            />
            )
          })
        }
      </div>
    )
  }
}

export default FeedPage

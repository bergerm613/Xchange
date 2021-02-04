import './App.css'
import React, { Component } from "react"
import {Container, Row, Col} from "react-bootstrap"

class FeedItem extends Component {
  render() {
    return (
    <Container>
        <Row>
          <Col>1 of 1</Col>
          <Col>
            <div>{this.props.itemName}</div>
            <div>{this.props.description}</div>
            <div>{this.props.date}</div>
          </Col>
        </Row>
    </Container>
    )
  }
}

export default FeedItem
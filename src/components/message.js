import React, { Component } from 'react'

class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Message state 1'
    }
  }

  changeMessage() {
    this.setState({
      message: 'New message'
    })
  }

  render() {
    return (
      <div>
        <h1> { this.state.message } </h1>
        <button onClick={ () => this.changeMessage() }>Change message</button>
      </div>
    )
  }
}

export default Message

import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      userName: '',
      comments: '',
      topic: 'react'
    }
  }

  handleInput = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  handleSelect = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault();
  }

  render(){
    const { userName, comments, topic} = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input 
            type='text' 
            value={userName} 
            onChange={this.handleInput} 
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea 
            value={comments}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label>topic</label>
          <select value={topic} onChange={this.handleSelect}>
            <option value='react'>React</option>
            <option value='vue'>Vue</option>
            <option value='angular'>Angular</option>
          </select>
        </div>
        <button type="submit">Submit form!</button>
      </form>
    )
  }
} 

export default Form
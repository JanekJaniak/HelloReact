import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler() {
    console.log('Click class button');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me too</button>
      </div>
    )
  }
}

export default ClassClick
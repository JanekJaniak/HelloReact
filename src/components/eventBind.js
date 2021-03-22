import React, { Component } from 'react'

class eventBind extends Component {
  constructor() {
    super() 

    this.state = {
      message: 'Hej eventBind'
    }

    // 3. bind clickHandler to this
    // this.clickHandler = this.clickHandler.bind(this)
  }

  //  1,2,3 approach
  // clickHandler() {
  //   this.setState({
  //     message: 'Nara eventBind'
  //   })
  // }

  // 4 approach, class property approach
  clickHandler = () => {
    this.setState({
      message: "Nara eventBind"
    })
  }

  render() {
    return (
      <div>
        <div>{ this.state.message }</div>
        {/* 1. add .bind(this) to bind event, bind in render, new render on every event, low performance*/}
        {/* <button onClick={ this.clickHandler.bind(this) }>Click!</button> */}
        
        {/* 2. add arrow function in render method, low performance  */}
        {/* <button onClick={ () => this.clickHandler() }>Click!</button>  */}

        {/*  3. official, bind in constructor */}
        <button onClick={ this.clickHandler }>Click!</button>
      </div>
    )
  }
}

export default eventBind
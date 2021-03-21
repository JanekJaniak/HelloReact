import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  // 1. To execute after state is set use second parameter in setState, callBack function
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log('Callback value', this.state.count);
    //   } 
    // )

  // 3. Resolution
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    console.log(this.state.count);
  }

  // 2. This will have same effect as above, react groups state calls for better performance, they are done here in one go
  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render(){
    return (
      <div>
        <h1>Count - { this.state.count }</h1>
        <button onClick={ ()=>this.incrementFive() }>Increment</button>
      </div>
    )
  }
} 

export default Counter

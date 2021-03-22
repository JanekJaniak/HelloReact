import { Component } from 'react';

class HelloClass extends Component {
  render() {
    const {name, lastName } = this.props
    
    //state destructure
    // const {state1, state2 } = this.state

    return <h2>Hello from { name } { lastName }'s Class Component</h2>
  }
}

export default HelloClass
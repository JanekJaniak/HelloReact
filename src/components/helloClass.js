import { Component } from 'react';

class HelloClass extends Component {
  render() {
    return <h2>Hello from { this.props.name } 's Class Component</h2>
  }
}

export default HelloClass
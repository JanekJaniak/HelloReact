import { Component } from 'react';
import './App.css';

// import Hello from './components/hello.js'
import { Hello } from './components/hello.js'

import HelloClass from './components/helloClass.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="Czarek">
          <p>Children props</p>
        </Hello>
        <Hello name="Jarek"/>
          <button>Click</button>
        <Hello name="Darek"/>
        <HelloClass />
      </div>
    );
  }
}

export default App;

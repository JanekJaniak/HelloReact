import { Component } from 'react';
import './App.css';

// import Hello from './components/hello.js'
import { Hello } from './components/hello.js'

import HelloClass from './components/helloClass.js'
import Message from './components/message.js'
import Counter from './components/counter.js'
import FunctionClick from './components/functionClick.js'
import ClassClick from './components/classClick.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="Czarek">
          <p>Children props</p>
        </Hello>
        <Hello name="Jarek" lastName="Ch.."/>
          <button>Click</button>
        <Hello name="Darek"/>
        <HelloClass />
        <HelloClass name="Czarek" lastName="Ch.."/>
        <Message />
        <Counter />
        <FunctionClick />
        <ClassClick />
      </div>
    );
  }
}

export default App;

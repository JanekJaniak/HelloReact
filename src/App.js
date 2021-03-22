import { Component } from 'react';
import './App.css';

// import Hello from './components/hello.js'
// import { Hello } from './components/hello.js'

// import HelloClass from './components/helloClass.js'
// import Message from './components/message.js'
// import Counter from './components/counter.js'
// import FunctionClick from './components/functionClick.js'
// import ClassClick from './components/classClick.js'
// import EventBind from './components/eventBind.js'
import ParentComponent from './components/parrentComponent.js'
import UserGreeting from './components/userGreeting.js'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Hello name="Czarek">
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
        <EventBind /> */}
        {/* Passing methods as props */}
        <ParentComponent />
        {/* Conditional rendering */}
        <UserGreeting />
      </div>
    );
  }
}

export default App;

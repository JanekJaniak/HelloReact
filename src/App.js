import './App.css';

// import Hello from './components/hello.js'
import { Hello } from './components/hello.js'

import HelloClass from './components/helloClass.js'

function App() {
  return (
    <div className="App">
      <Hello name="Czarek"/>
      <Hello name="Jarek"/>
      <Hello name="Darek"/>
      <HelloClass />
    </div>
  );
}

export default App;

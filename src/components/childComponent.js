import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* passing the method as prop from parent to child */}
      {/* <button onClick={ props.greetHandler }>Greed parent</button> */}
      {/* pass a parameter when calling a method from child component */}
      <button onClick={ () => props.greetHandler('Hans') }>Greed parent</button>
    </div>
  )
}

export default ChildComponent
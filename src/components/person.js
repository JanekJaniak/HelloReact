import React from 'react'

function Person({ person }) {
  return (
    <div>
      <h2>
        I'm { person.firstName } { person.lastName }. I'm { person.age } 
      </h2>
    </div>
  )
}

export default Person
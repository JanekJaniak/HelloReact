import React from 'react'

import Person from './person.js'

function PersonsList() {
  
  const persons = [
    { id:1, firstName:"John", lastName:"Doe", age:46 },
    { id:2, firstName:"Joanne", lastName:"Doe", age:43 },
    { id:3, firstName:"Hans", lastName:"Doe", age:66 }
  ]

  const personList = persons.map( person => <Person key={ person.id  } person={ person } />)
  
  return <div>{ personList }</div>
}

export default PersonsList
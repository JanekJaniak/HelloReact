import React from 'react'

function NameList() {
  
  const names = ['Czarek', 'Jarek', 'Darek']

  // Don't use index as key
  const nameList = names.map((name,index) => <h2 key={ index }> {name} </h2>)

  return <div>{ nameList }</div>
}

export default NameList
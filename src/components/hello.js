import React from 'react'

//named export
export const Hello = (props) => {
  return  (
    <div id='1' custom='testCustomData'>
      <h1> { props.name } { props.lastName } says hello !!!</h1>
      { props.children }
    </div>
  )
}

//Descructure in parameter
// export const Hello = (name, lastName) => {
//   return  (
//     <div id='1' custom='testCustomData'>
//       <h1> { name } { lastName } says hello !!!</h1>
//     </div>
//   )
// }


//Descructure in function body
// export const Hello = (props) => {
//    const {name, lastName} = props
//   return  (
//     <div id='1' custom='testCustomData'>
//       <h1> { name } { lastName } says hello !!!</h1>
//     </div>
//   )
// }

//Default export
  {/* return React.createElement(
    'div',
    {id: 1, customData: 'testCustomData'},
    React.createElement('h1', null, 'Janek says hello')
  )
} */}
// export default hello
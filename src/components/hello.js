import React from 'react'

//named export
export const Hello = () => {
  return  (
      <div id='1' custom='testCustomData'>
        <h1>Janek says hello !!!</h1>
      </div>
  )
}

  {/* return React.createElement(
    'div',
    {id: 1, customData: 'testCustomData'},
    React.createElement('h1', null, 'Janek says hello')
  )
} */}
// export default hello
import React from 'react' 
import ReactDOM from 'react-dom'

function portalDemo() {
  return ReactDOM.createPortal(
    <div>
      <h1>Portal Demo</h1>
    </div>,
    document.getElementById('portal-root')
  )
}

export default portalDemo
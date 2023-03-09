import { useState } from 'react'
import reactLogo from './assets/react.svg'
import qrImage from './assets/image-qr-code.png'
import './style.css'

function App() {
 
  return (
    <div className="App">
      <div className="wrapper">

  <div className="qr-container">
    <div className="qr-content">
      <div className="image-container">

      <img className="qr-code-image" src={qrImage} alt="qr-code-image" />
      </div>
      <h2>Improve your front-end skills by building projects</h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your 
        coding skills to the next level
      </p>
    </div>
  </div>
      </div>
      
    </div>
  )
}

export default App

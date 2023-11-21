import React from 'react'
import './App.css'

const App = () => {
  
  const handle=() => {
    alert("🤨");
  }
  
  
  return (
    <>
    <div className='App'><h1>prompt message</h1></div>
    <button onClick={handle}>Click here</button>
    <h3 className='App'>Navitha S</h3>
    <h4 className='App'>Class - Cybersecurity</h4>
    <h4><u>List of departments</u></h4>
    <ol>
    <li>Mechatronics</li>
    <li>ECE</li>
    </ol>
    <ul>
    <h4><u>List of subjects</u></h4>
    <li>Maths</li>
    <li>Physics</li>
    <li>English</li>
    </ul>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Spy_Family_Fan_Book_Eyes_Only.jpeg/220px-Spy_Family_Fan_Book_Eyes_Only.jpeg"></img>
    <p>Link: if the image is not visible , please visit <a target='_blank' href="https://www.imdb.com/title/tt13706018/"> anya forger</a></p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/hvL1339luv0?si=_DtgEiQtUV8cRYKp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    
    </>
  )
} 

export default App

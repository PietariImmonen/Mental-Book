import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DragDrop from './components/DragAndDrop/DragDrop'
import FrontPage from './components/FrontPage/FrontPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <div className='web-content'>
        <FrontPage />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DragDrop from './components/DragDrop'
import FrontPage from './components/FrontPage'
import Navbar from './components/Navbar'

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

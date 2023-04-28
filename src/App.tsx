import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DragDrop from './components/DragAndDrop/DragDrop'
import FrontPage from './components/FrontPage/FrontPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About'
import LoginPage from './components/LoginPage/LoginPage'
import SignInPage from './components/SignInPage/SignInPage'
import { useApolloClient, useQuery } from '@apollo/client'

import { ALL_PERSONS, ADD_FEELING, LOGIN } from './queries/query'

function App() {

  const client = useApolloClient()
  const [token, setToken] = useState(null)

  const handleLogOut = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
    console.log(token)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontPage />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <LoginPage token={token} setToken={setToken}/>,
    },
    {
      path: "/signup",
      element: <SignInPage />,
    },
    {
      path: "/write",
      element: <DragDrop token={token}/>,
    },
  ]);

  return (
    <div className="App">
      <Navbar token={token} handleLogOut={handleLogOut}/>
      <div className='web-content'>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  )
}

export default App

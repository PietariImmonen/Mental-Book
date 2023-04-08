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

function App() {

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
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignInPage />,
    },
    {
      path: "/write",
      element: <DragDrop />,
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <div className='web-content'>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  )
}

export default App

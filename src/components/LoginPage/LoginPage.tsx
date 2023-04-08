import React, { useState } from 'react'
import './loginpage.css'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  console.log(username, password)
  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-input-container'>
          <input 
            type='text'
            onChange={handleUsername}
            className='login-input'
            value={username}
          ></input>
          <p className='login-input-text'>Username</p>
        </div>
        <div className='login-input-container'>
          <input 
            type='password'
            onChange={handlePassword}
            className='login-input'
            value={password}
          ></input>
          <p className='login-input-text'>Password</p>
        </div>
        <div className='login-input-button'>Log in!</div>
        <div className='login-page-text'>
          <a href='/' className='login-text'>Forgot password!</a>
          <a href='/signup' className='login-text'>Create account!</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
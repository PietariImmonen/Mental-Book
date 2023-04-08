import React, { useState } from 'react'
import './singinpage.css'

const SignInPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  return (
    <div className='sign-page'>
      <div className='sign-container'>
        <div className='sign-input-container'>
          <input 
            type='text'
            onChange={handleUsername}
            className='sign-input'
            value={username}
          ></input>
          <p className='sign-input-text'>Username</p>
        </div>
        <div className='sign-input-container'>
          <input 
            type='text'
            onChange={handlePassword}
            className='sign-input'
            value={password}
          ></input>
          <p className='sign-input-text'>Password</p>
        </div>
        <div className='sign-input-container'>
          <input 
            type='email'
            onChange={handleEmail}
            className='sign-input'
            value={email}
          ></input>
          <p className='sign-input-text'>Email</p>
        </div>
        <div className='sign-input-button'>Create Account!</div>
      </div>
    </div>
  )
}

export default SignInPage
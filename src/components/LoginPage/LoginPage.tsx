import React, { useState, useEffect } from 'react'
import './loginpage.css'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../queries/query'

interface props {
  setToken: (e: any) => void;
  token: string | null;
}

const LoginPage: React.FC<props> = ({setToken, token}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const [ login, result ] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  })

  const submit = async (event: any) => {
    login({ variables: { username, password } })
    console.log(result, 'result')
  }


  useEffect(() => {
    if ( result.data ) {
      const token = result.data.login.value
      setToken(token)
      localStorage.setItem('phonenumbers-user-token', token)
      console.log(token)
    }
  }, [result.data]) // eslint-disable-line

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
        <div className='login-input-button' onClick={submit}>Log in!</div>
        <div className='login-page-text'>
          <a href='/' className='login-text'>Forgot password!</a>
          <a href='/signup' className='login-text'>Create account!</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
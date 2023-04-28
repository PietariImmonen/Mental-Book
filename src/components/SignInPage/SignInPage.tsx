import React, { useState } from 'react'
import './singinpage.css'
import { useMutation } from '@apollo/client'
import { CREATE_ACCOUNT } from '../../queries/query'

const SignInPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }


  const [ account, result ] = useMutation(CREATE_ACCOUNT, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  })

  const submit = async (event: any) => {
    console.log('called')
    account({ variables: { username, password } })
    console.log(result, 'result')
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
        <div className='sign-input-button' onClick={submit}>Create Account!</div>
      </div>
    </div>
  )
}

export default SignInPage
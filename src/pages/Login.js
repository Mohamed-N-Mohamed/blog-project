import React from 'react'
import { auth, provider } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth'

function Login() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((res) => {

    })

  }
  return (
    <div className='loginPage'>
      <p>Sign in</p>
      <button className='login-with-google-btn'>Log in with Google Account</button>

    </div>
  )
}

export default Login
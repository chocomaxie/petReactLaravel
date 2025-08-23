import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
        <form className='form-container '>
          <h1 className='form-title' >Login</h1>
          <div className='input-box'>
            <input  type="email" placeholder='Email' required />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' required />
          </div>
          <button className='btn'>Login</button>
          <p className='footer'>Don't have an account? <Link className='touch'  to="/register">Register</Link></p>
        </form>
      </div>
  )
}

export default Login
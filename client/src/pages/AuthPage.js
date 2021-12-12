import React, { useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
// import { Navigate, Outlet } from 'react-router-dom'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect( () => {
message(error)
clearError()
    }, [error, message, clearError])

const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
}

const registerHandler = async () => {
    try {
const data = await request('/api/auth/register', 'POST', {...form})
message(data.message)
    } catch(e) {}
}

const loginHandler = async () => {
    try {
const data = await request('/api/auth/login', 'POST', {...form})
auth.login(data.token, data.userId)
    } catch(e) {}
}

    return (
        <div className="row">
          <div className="col s6 offset-s3">
              <h1>Shorten your link</h1>
      <div className="card teal lighten-2">
        <div className="card-content white-text">
          <span className="card-title">Transform your long URL into a shorter, more readable link</span>
        <div>

        <div className="input-field" style={{marginTop: 40}}>
          <input
          placeholder="Enter your email"
          id="email"
          type="text"
          name="email"
          className="lime-input"
          onChange={changeHandler}
           />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input
          placeholder="Enter your password"
          id="password"
          type="password"
          name="password"
          className="lime-input"
          onChange={changeHandler}
           />
          <label htmlFor="password" >Password</label>
        </div>

        </div>
        </div>
        <div className="card-action">
          <button
          className="btn lime"
          style={{marginRight: 10}}
          disabled={loading}
          onClick={loginHandler}
          >Log In</button>
          <button
          className="btn grey lighten-1 black-text"
          onClick={registerHandler}
          disabled={loading}>
              Register
              </button>

        </div>
  </div>
          </div>
        </div>
    )
}
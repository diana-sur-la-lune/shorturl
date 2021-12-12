import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom'

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: '', password: ''
    })

const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
}



    return (
        <div className="row">
          <div className="col s6 offset-s3">
              <h1>Shorten your link</h1>
      <div className="card teal lighten-2">
        <div className="card-content white-text">
          <span className="card-title">Transform your long URL into a shorter, more readable link</span>
        <div>

        <div class="input-field" style={{marginTop: 40}}>
          <input
          placeholder="Enter your email"
          id="email"
          type="text"
          name="email"
          className="lime-input"
          onChange={changeHandler}
           />
          <label for="email">Email</label>
        </div>

        <div class="input-field">
          <input
          placeholder="Enter your password"
          id="password"
          type="password"
          name="password"
          className="lime-input"
          onChange={changeHandler}
           />
          <label for="password" >Password</label>
        </div>

        </div>
        </div>
        <div className="card-action">
          <button className="btn lime" style={{marginRight: 10}}>Log In</button>
          <button className="btn grey lighten-1 black-text">Register</button>

        </div>
  </div>
          </div>
        </div>
    )
}
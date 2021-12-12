import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'

export const Navbar = () => {


    const history = useHistory()
    const auth = useContext(AuthContext)

        const logoutHandler = event => {
            event.preventDefault()
            auth.logout()
            history.push('/')
        }
    

    return (
        <nav>
        <div className="nav-wrapper">
          <a href="/" class="brand-logo">Link Shortener</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to="/create">Create</NavLink></li>
            <li><NavLink to="/links">Links</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Log out</a></li>
          </ul>
        </div>
      </nav>
    )
}

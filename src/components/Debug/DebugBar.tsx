import * as React from "react"
import "./DebugBar.scss"
import { NavLink } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

/**
 * A debug bar that may be useful during development.
 */
const DebugBar: React.FC = () => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0()

  let authButton = (
    <button type='button' disabled className='button'>
      Loading
    </button>
  )

  if (!isLoading) {
    authButton = isAuthenticated ? (
      <button
        type='button'
        className='button froly'
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </button>
    ) : (
      <button
        type='button'
        className='button'
        onClick={() => {
          loginWithRedirect().then().catch()
        }}
      >
        Login
      </button>
    )
  }

  return (
    <div className='DebugBar'>
      <NavLink exact to='/' className='link' activeClassName='active'>
        Main
      </NavLink>
      <NavLink exact to='portal' className='link' activeClassName='active'>
        Home
      </NavLink>
      <div className='align-right'>{authButton}</div>
    </div>
  )
}

export default DebugBar

import * as React from "react"
import "./DebugBar.scss"
import { NavLink } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import Button from "../Button/Button"

/**
 * A debug bar that may be useful during development.
 */
const DebugBar: React.FC = () => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0()

  let authButton = (
    <Button label='loading' disabled>
      Loading
    </Button>
  )

  if (!isLoading) {
    authButton = isAuthenticated ? (
      <Button
        className='froly'
        label='logout'
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </Button>
    ) : (
      <Button
        label='login'
        onClick={() => {
          loginWithRedirect().then().catch()
        }}
      >
        Login
      </Button>
    )
  }

  return (
    <div className='DebugBar'>
      <NavLink exact to='/' className='link' activeClassName='active'>
        Main
      </NavLink>
      <NavLink exact to='portal' className='link' activeClassName='active'>
        Portal
      </NavLink>
      <div className='align-right'>{authButton}</div>
    </div>
  )
}

export default DebugBar

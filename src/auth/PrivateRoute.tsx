import * as React from "react"
import { Route } from "react-router-dom"
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"
import Verify from "../views/Verify/index.view"

interface PrivateRouteProps {
  component: React.ComponentType<any>
  path: string
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
}

/**
 * Represents a protected route that can only be accessed when the user is
 * authenticated. Users will be redirected to the Auth0 login page if they
 * attempt to access protected routes.
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  path,
  exact,
  sensitive,
  strict,
}: PrivateRouteProps) => {
  const { user } = useAuth0()
  const route: React.ComponentType<any> = user?.email_verified
    ? component
    : Verify
  return (
    <Route
      component={withAuthenticationRequired(route, {
        returnTo: path,
        onRedirecting: () => <div>Redirecting...</div>,
      })}
      path={path}
      exact={exact}
      sensitive={sensitive}
      strict={strict}
    />
  )
}

PrivateRoute.defaultProps = {
  exact: false,
  sensitive: false,
  strict: false,
}

export default PrivateRoute

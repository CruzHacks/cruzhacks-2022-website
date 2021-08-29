import * as React from "react"
import { Route } from "react-router-dom"
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"
import VerifyView from "../views/Verify/index.view"
import ErrorView from "../views/Error/index.view"

interface PrivateRouteProps {
  component: React.ComponentType<any>
  path: string
  admin?: boolean
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
}

/**
 * Represents a protected route that can only be accessed when the user is
 * authenticated. Users will be redirected to the Auth0 login page if they
 * attempt to access protected routes.
 *
 * If this route should only be accessible by organizers, please set the
 * `admin` prop to True.
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  path,
  admin,
  exact,
  sensitive,
  strict,
}: PrivateRouteProps) => {
  const { user } = useAuth0()

  let route: React.ComponentType<any> = component

  // redirect if email is not verified
  if (!user?.email_verified) {
    route = VerifyView
  }

  // if admin route, redirect if not admin
  const namespace = "https://example.com"
  const roles = (user && user[`${namespace}/roles`]) || []
  if (admin && roles.indexOf("Organizer") === -1) {
    route = ErrorView
  }

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
  admin: false,
  exact: false,
  sensitive: false,
  strict: false,
}

export default PrivateRoute

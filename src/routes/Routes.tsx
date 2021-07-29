import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import PrivateRoute from "../auth/PrivateRoute"
import HomeView from "../views/Home/index.view"
import PortalView from "../views/Portal/index.view"
import LandingView from "../views/Landing/index.view"

const Routes: React.FC = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='Routes'>
      <Switch>
        <Route exact path='/' component={LandingView} />
        <PrivateRoute exact path='/home' component={HomeView} />
        <PrivateRoute exact path='/portal' component={PortalView} />
      </Switch>
    </div>
  )
}

export default Routes

import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import PrivateRoute from "../auth/PrivateRoute"
import HomeView from "../views/Home/index.view"
// import PortalView from "../views/Portal/index.view"
import TeamView from "../views/Team/index.view"
import ErrorView from "../views/Error/index.view"
import DashboardView from "../views/Dashboard/index.view"

const Routes: React.FC = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='Routes'>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/team' component={TeamView} />
        {/* <PrivateRoute exact path='/portal' component={PortalView} /> */}

        <PrivateRoute
          exact
          admin
          path='/admin/dashboard'
          component={DashboardView}
        />

        <Route exact path='*' component={ErrorView} />
      </Switch>
    </div>
  )
}

export default Routes

import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "../App"

const Routes: React.FC = () => (
  <div className='Routes'>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </Router>
  </div>
)

export default Routes

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

// constants
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN || ""
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENTID || ""
const AUTH0_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE || ""

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      audience={AUTH0_AUDIENCE}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

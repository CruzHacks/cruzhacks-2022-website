import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import "./index.scss"

const PortalView: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0()
  const [token, setToken] = useState<string>("")
  useEffect(() => {
    if (user?.email_verified) {
      getAccessTokenSilently().then(accessToken => setToken(accessToken))
    }
  })
  return (
    <>
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <div>{token}</div>
    </>
  )
}

export default PortalView

import * as React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import { useHistory } from "react-router-dom"

interface Auth0ProviderProps {
  domain: string
  clientId: string
  audience: string
  redirectUri: string
  children: React.ReactNode
}

/**
 * See: https://auth0.com/blog/complete-guide-to-react-user-authentication/#Set-Up-the-Auth0-React-SDK
 */
const Auth0ProviderWithHistory: React.FC<Auth0ProviderProps> = ({
  domain,
  clientId,
  audience,
  redirectUri,
  children,
}: Auth0ProviderProps) => {
  const history = useHistory()

  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      audience={audience}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens
      cacheLocation='memory'
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory

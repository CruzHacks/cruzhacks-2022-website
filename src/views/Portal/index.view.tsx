import * as React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const PortalView: React.FC = () => {
  const { user } = useAuth0()

  return (
    <>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </>
  )
}

export default PortalView

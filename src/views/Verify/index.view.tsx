import React, { useEffect, useState } from "react"
import "./index.scss"
import { useAuth0 } from "@auth0/auth0-react"
import ResendVerification from "../../components/ResendVerification/ResendVerification"

const Verify: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0()
  const [token, setToken] = useState<string>("")
  const [, setError] = useState<string>("")
  useEffect(() => {
    getAccessTokenSilently()
      .then(accessToken => {
        setError("")
        setToken(accessToken)
      })
      .catch(err => {
        setError(err)
        setToken("")
      })
  })

  return (
    <>
      <div className='verify-container'>
        You are not a verified user
        <ResendVerification user={user ? user?.sub : ""} token={token} />
      </div>
    </>
  )
}

export default Verify

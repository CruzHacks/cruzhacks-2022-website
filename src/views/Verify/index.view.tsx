import React, { useEffect, useState } from "react"
import "./index.scss"
import { useAuth0 } from "@auth0/auth0-react"
import ResendVerification from "../../components/ResendVerification"

const VerifyView: React.FC = () => {
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
      <div className='verify-view'>
        <p>You are not a verified user</p>
        <ResendVerification user={user ? user?.sub : ""} token={token} />
      </div>
    </>
  )
}

export default VerifyView

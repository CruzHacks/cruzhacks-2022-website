import React from "react"
import "./index.scss"
import { useAuth0 } from "@auth0/auth0-react"
import { resendVerificationEmail } from "../../utils/Api"

const Verify: React.FC = () => {
  const { user } = useAuth0()
  return (
    <>
      <div className='verify-container'>
        You are not a verified user
        <button
          type='button'
          onClick={() => resendVerificationEmail(user?.sub)}
        >
          {" "}
          Resend Verification Email
        </button>
      </div>
    </>
  )
}

export default Verify

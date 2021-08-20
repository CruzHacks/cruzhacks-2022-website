import React from "react"
import "./ResendVerification.scss"
import { resendVerificationEmail } from "../../utils/Api"
import { VerificationEmailProps } from "../../Props/props"

const ResendVerification: React.FC<VerificationEmailProps> = ({
  user,
  token,
}: VerificationEmailProps) => (
  <>
    <div className='reset-verification'>
      <button
        type='button'
        onClick={() => resendVerificationEmail(user, token)}
      >
        Resend Verification Email
      </button>
    </div>
  </>
)

export default ResendVerification

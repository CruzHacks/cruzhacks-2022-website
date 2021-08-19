import React from "react"
import "./ResendVerification.scss"
import Recaptcha from "react-recaptcha"
import { resendVerificationEmail, verifyToken } from "../../utils/Api"
import { VerificationEmailProps } from "../../Props/props"

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || ""

const ResendVerification: React.FC<VerificationEmailProps> = ({
  user,
  token,
}: VerificationEmailProps) => (
  <>
    <div className='reset-verification'>
      <Recaptcha
        sitekey={RECAPTCHA_SITE_KEY}
        render='explicit'
        verifyCallback={verifyToken}
        onloadCallback={() => console.log("done!")}
      />
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

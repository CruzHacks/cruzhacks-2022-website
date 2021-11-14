import React, { useState } from "react"
import "./index.scss"
import ReCAPTCHA from "react-google-recaptcha"
import CoolDownButton from "../Button/CoolDownButton"
import { resendVerificationEmail, verifyRecaptchaToken } from "../../utils/Api"
import { VerificationEmailProps } from "../../Props/props"

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || ""

const ResendVerification: React.FC<VerificationEmailProps> = ({
  user,
  token,
}: VerificationEmailProps) => {
  const [verified, setVerified] = useState<boolean>(false)
  return (
    <div className='resendVerification-component'>
      <div className='resendVerification-component__recaptcha'>
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={res => verifyRecaptchaToken(res, () => setVerified(true))}
          theme='dark'
          onExpired={() => setVerified(false)}
        />
      </div>
      <CoolDownButton
        label='resend'
        disabled={!verified}
        duration={1000 * 30}
        onClick={() => {
          resendVerificationEmail(user, token)
        }}
      >
        Resend Verification Email
      </CoolDownButton>
    </div>
  )
}

export default ResendVerification

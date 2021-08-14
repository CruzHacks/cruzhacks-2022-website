import React from "react"
import "./ResendVerification.scss"
import CoolDownButton from "../Button/CoolDownButton"
import { resendVerificationEmail } from "../../utils/Api"
import { VerificationEmailProps } from "../../Props/props"

const ResendVerification: React.FC<VerificationEmailProps> = ({
  user,
  token,
}: VerificationEmailProps) => (
  <>
    <div className='reset-verification'>
      <CoolDownButton
        label='resend'
        duration={1000 * 120}
        localStorageKey='resend_verification'
        onClick={() => {
          resendVerificationEmail(user, token)
        }}
      >
        Resend Verification Email
      </CoolDownButton>
    </div>
  </>
)

export default ResendVerification

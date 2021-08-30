import React, { useState } from "react"
import "./ResendVerification.scss"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import ReCAPTCHA from "react-google-recaptcha"
import CoolDownButton from "../Button/CoolDownButton"
import { resendVerificationEmail } from "../../utils/Api"
import { VerificationEmailProps } from "../../Props/props"

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || ""
const RECAPTCHA_VERIFICATION_ENDPOINT =
  `${process.env.REACT_APP_RECAPTCHA_VERIFICATION_ENDPOINT}/submit` || ""
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY || ""

const ResendVerification: React.FC<VerificationEmailProps> = ({
  user,
  token,
}: VerificationEmailProps) => {
  const [verified, setVerified] = useState<boolean>(false)
  const verifyToken = (res: string | null) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        Authentication: REACT_APP_API_KEY,
        token: res,
      },
    }
    axios
      .post(RECAPTCHA_VERIFICATION_ENDPOINT, {}, axiosConfig)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          return setVerified(true)
        }
        return response
      }) // after response 200, token validated: unlock verification button
      .catch(err => err)
  }
  return (
    <>
      <div className='reset-verification'>
        <div className='recaptcha'>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={verifyToken}
            onExpired={() => setVerified(false)}
          />
        </div>
        <p>{`verified? ${verified}`}</p>

        <CoolDownButton
          label='resend'
          disabled={!verified}
          duration={1000 * 30}
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
}

export default ResendVerification

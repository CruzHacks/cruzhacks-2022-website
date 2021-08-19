import React, { useState } from "react"
import "./ResendVerification.scss"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import Recaptcha from "react-recaptcha"
import { resendVerificationEmail } from "../../utils/Api"
import { VerificationEmailProps } from "../../Props/props"

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || ""
const RECAPTCHA_VERIFICATION_ENDPOINT =
  `${process.env.REACT_APP_RECAPTCHA_VERIFICATION_ENDPOINT}/submit` || ""

const ResendVerification: React.FC<VerificationEmailProps> = ({
  user,
  token,
}: VerificationEmailProps) => {
  const [verified, setVerified] = useState<boolean>(false)
  const verifyToken = (res: string) => {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
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
        <Recaptcha
          sitekey={RECAPTCHA_SITE_KEY}
          render='explicit'
          verifyCallback={verifyToken}
          onloadCallback={() => setVerified(false)}
        />
        <p>{`verified? ${verified}`}</p>
        <button
          type='button'
          onClick={() => resendVerificationEmail(user, token)}
        >
          Resend Verification Email
        </button>
      </div>
    </>
  )
}

export default ResendVerification
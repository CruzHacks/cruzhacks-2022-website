import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

/*
Mock Auth0 Resend Verification Email
Params: userId -> string | undefined, authToken -> string
Return: n/a
*/

const resendVerificationEmailEndpoint =
  `${process.env.REACT_APP_AUTHENTICATION_ENDPOINT}/resend` || ""

const subscriptionEndpoint = process.env.REACT_APP_MAILCHIMP_API || ""

const RECAPTCHA_VERIFICATION_ENDPOINT =
  `${process.env.REACT_APP_RECAPTCHA_VERIFICATION_ENDPOINT}/submit` || ""

const API_KEY = process.env.REACT_APP_API_KEY

export function resendVerificationEmail(
  userId: string | undefined,
  authToken: string
) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  const body = {
    userId,
  }
  axios
    .post(resendVerificationEmailEndpoint, body, axiosConfig)
    .then((res: AxiosResponse) => res)
    .catch(err => err)
}

export function subscribeMailchimp(userEmail: String) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authentication: API_KEY,
      "Content-Type": "application/json",
    },
  }

  return axios
    .post(
      subscriptionEndpoint,
      {
        email: userEmail,
      },
      axiosConfig
    )
    .then((response: AxiosResponse) => ({
      status: response.status,
      data: response.data,
    }))
    .catch(err => ({
      status: 500,
      data: err,
    }))
}

export function verifyRecaptchaToken(res: string | null, callback: any) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authentication: API_KEY,
      token: res,
    },
  }
  axios
    .post(RECAPTCHA_VERIFICATION_ENDPOINT, {}, axiosConfig)
    .then((response: AxiosResponse) => {
      if (response.status === 200) {
        return callback()
      }
      return response
    }) // after response 200, token validated: unlock verification button
    .catch(err => err)
}

import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

/*
Mock Auth0 Resend Verification Email
Params: userId -> string | undefined, authToken -> string
Return: n/a
*/

const resendVerificationEmailEndpoint =
  `${process.env.REACT_APP_AUTHENTICATION_ENDPOINT}/resend` || ""

// Remove Once multiple Endpoints are made
// eslint-disable-next-line
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

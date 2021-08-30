import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

/*
Mock Auth0 Resend Verification Email
Params: userId -> string | undefined, authToken -> string
Return: n/a
*/

const resendVerificationEmailEndpoint =
  `${process.env.REACT_APP_AUTHENTICATION_ENDPOINT}/resend` || ""

const subscriptionEndpoint = process.env.REACT_APP_MAILCHIMP_API || ""

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
    .then((response: AxiosResponse) => {
      if (response.status === 200) {
        return "Successfully Added User"
      }
      return "Unable to Add User"
    })
    .catch(err => err)
}

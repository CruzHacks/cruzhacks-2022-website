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

const AnnouncementEndpoint =
  `${process.env.REACT_APP_ANNOUNCEMENTS_ENDPOINT}/` || ""

const AnaltyicsEndpoint = `${process.env.REACT_APP_APPLICATION_ENDPOINT}/` || ""

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
      status: null,
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

export function getAllAnnouncements() {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authentication: API_KEY,
    },
  }
  return axios.get(AnnouncementEndpoint, axiosConfig)
}

export function postAnnouncement(
  authToken: string,
  title: string,
  message: string
) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  const body = {
    title,
    message,
  }
  return axios
    .post(AnnouncementEndpoint, body, axiosConfig)
    .then((response: AxiosResponse) => {
      if (response.status === 201) {
        return response
      }
      return response
    }) // after response 200, token validated: unlock verification button
    .catch(err => err.message)
}

export function getAnalytics(authToken: string) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }

  return axios
    .get(AnaltyicsEndpoint, axiosConfig)
    .then((response: AxiosResponse) => {
      if (response.status === 200) {
        return response
      }
      return response
    })
    .catch(err => err.message)
}

import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const RESEND_VERIFICATION_EMAIL_ENDPOINT =
  `${process.env.REACT_APP_ENDPOINT_URL}/auth/resend` || ""

const SUBSCRIPTION_ENDPOINT =
  `${process.env.REACT_APP_ENDPOINT_URL}/subscribe` || ""

const RECAPTCHA_VERIFICATION_ENDPOINT =
  `${process.env.REACT_APP_ENDPOINT_URL}/verifyRecaptcha/submit` || ""

const ANNOUNCEMENT_ENDPOINT =
  `${process.env.REACT_APP_ENDPOINT_URL}/announcements/` || ""

const APPLICATION_ENDPOINT =
  `${process.env.REACT_APP_ENDPOINT_URL}/application` || ""

const ANALYTICS_ENDPOINT = `${APPLICATION_ENDPOINT}/analytics` || ""
const CHECK_APPLICATION_ENDPOINT = `${APPLICATION_ENDPOINT}/checkApp` || ""

const API_KEY = process.env.REACT_APP_API_KEY

/*
Mock Auth0 Resend Verification Email
Params: userId -> string | undefined, authToken -> string
Return: n/a
*/
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
    .post(RESEND_VERIFICATION_EMAIL_ENDPOINT, body, axiosConfig)
    .then((res: AxiosResponse) => res)
    .catch(err => err)
}

export function subscribeMailchimp(userEmail: string) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authentication: API_KEY,
      "Content-Type": "application/json",
    },
  }

  return axios
    .post(
      SUBSCRIPTION_ENDPOINT,
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
      Authentication: API_KEY || "",
      token: res || "",
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
      Authentication: API_KEY || "",
    },
  }
  return axios.get(ANNOUNCEMENT_ENDPOINT, axiosConfig)
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
    .post(ANNOUNCEMENT_ENDPOINT, body, axiosConfig)
    .then((response: AxiosResponse) => {
      if (response.status === 201) {
        return response
      }
      return response
    }) // after response 200, token validated: unlock verification button
    .catch(err => err.message)
}

// application endpoints

// TODO: submit endpoint

/**
 * Check the application status for the given authenticated user.
 */
export function checkApplication(authToken: string) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }

  return axios
    .get(CHECK_APPLICATION_ENDPOINT, axiosConfig)
    .then((response: AxiosResponse) => ({
      statusCode: response.status,
      data: response.data,
    }))
    .catch(err => ({
      statusCode: null,
      data: err,
    }))
}

/**
 * Get applicant analytics. Only accessible by admins.
 */
export function getAnalytics(authToken: string) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }

  return axios
    .get(ANALYTICS_ENDPOINT, axiosConfig)
    .then((response: AxiosResponse) => ({
      status: response.status,
      data: response.data,
    }))
    .catch(err => ({
      status: null,
      data: err,
    }))
}

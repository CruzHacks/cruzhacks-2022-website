import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const endpoint = process.env.ENDPOINT || ""
/*
Debugging Private Endpoint
Params: authToken -> string
Return: statusCode -> integer
*/
export async function privateEndpointTest() {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authentication: "apiKey",
      "Content-Type": "application/json",
    },
  }
  const body = {
    test: "api",
  }
  let status = 400
  axios
    .post(endpoint, body, axiosConfig)
    .then((res: AxiosResponse) => {
      status = res.status
    })
    .catch(err => {
      status = err.statusCode
    })
  return status
}

/*
Mock Auth0 Resend Verification Email
Params: userId -> string | undefined
Return: n/a
*/

const resendVerificationEmailEndpoint = ""
export function resendVerificationEmail(userId: string | undefined) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authentication: "apiKey",
      "Content-Type": "application/json",
    },
  }
  const body = {
    user_id: userId || "",
  }
  axios
    .post(resendVerificationEmailEndpoint, body, axiosConfig)
    .then((res: AxiosResponse) => res)
    .catch(err => err)
}

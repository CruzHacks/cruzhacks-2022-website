import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const endpoint = process.env.ENDPOINT || ""
/*
Debugging Private Endpoint
Params: authToken -> string
Return: statusCode -> integer
*/
export default async function privateEndpointTest(authToken: string) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authentication: authToken,
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

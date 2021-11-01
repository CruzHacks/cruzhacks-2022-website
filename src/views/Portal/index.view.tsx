import React, { useEffect, useState } from "react"
import "./index.scss"
import { useAuth0 } from "@auth0/auth0-react"
import AppStatus from "Props/portal/application"
import ApplicationPages from "Props/portal/page"
import { checkApplication } from "utils/Api"
import Connected from "./components/ApplicationForm/Connected/index.view"
// import Demographic from "./components/ApplicationForm/Demographic/index.view"
import ApplicationForm from "./components/ApplicationForm/index.view"
import ApplicationStatus from "./components/ApplicationStatus/index.view"
import ApplicationBackground from "./components/Background/index.view"
import { retrieve, store } from "../../utils/Storage"

const PortalView: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [status, setStatus] = useState(AppStatus.Loading)
  const [page, setPage] = useState<number>(0)
  useEffect(() => {
    try {
      const cachedStatus = retrieve("applicationStatus", undefined)
      if (cachedStatus !== undefined) {
        setStatus(Number.parseInt(cachedStatus, 10))
        return
      }
    } catch (err) {
      // Something went wrong with the cache... fetch from API again.
    }

    getAccessTokenSilently()
      .then(accessToken => {
        checkApplication(accessToken).then(res => {
          switch ((res.data.status || "").toLowerCase()) {
            case "no document":
              // check if the application really doesn't exist, or if we failed to fetch it
              if (res.statusCode === 200) {
                setStatus(AppStatus.NotFound)
              } else {
                setStatus(AppStatus.Errored)
              }
              break
            case "accepted":
              setStatus(AppStatus.Accepted)
              store("applicationStatus", AppStatus.Accepted, 12 * 60 * 60) //  store for 12hrs
              break
            case "rejected":
              setStatus(AppStatus.Rejected)
              store("applicationStatus", AppStatus.Rejected, 12 * 60 * 60) // store for 12hrs
              break
            case "pending":
              setStatus(AppStatus.Pending)
              store("applicationStatus", AppStatus.Pending, 12 * 60 * 60) // store for 12hrs
              break
            default:
              setStatus(AppStatus.Errored)
              break
          }
        })
      })
      .catch(() => setStatus(AppStatus.Errored))
  }, [])

  switch (page) {
    case ApplicationPages.Home:
      return (
        <ApplicationBackground>
          <ApplicationStatus status={status} />
          <Connected />
        </ApplicationBackground>
      )
    default:
      return (
        <ApplicationBackground>
          <ApplicationForm page={page} setPage={setPage} />
        </ApplicationBackground>
      )
  }
}

export default PortalView

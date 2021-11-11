import React, { useEffect, useState } from "react"
import "./index.scss"
import { useHistory } from "react-router-dom"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import AppStatus from "Props/portal/application"
// import Button from "components/Button/Button"
import MainPage from "../ApplicationForm/MainPage/index.view"

const ApplicationStatus: React.FC = () => {
  const { nextPage, appStatus } = useApplication()!
  const [statusMessage, setStatusMessage] = useState<string>("")

  useEffect(() => {
    switch (appStatus) {
      case AppStatus.Loading:
        setStatusMessage("LOADING...")
        break
      case AppStatus.Pending:
        setStatusMessage("SUBMITTED")
        break
      case AppStatus.Accepted:
        setStatusMessage("ACCEPTED")
        break
      case AppStatus.Rejected:
        setStatusMessage("REJECTED")
        break
      case AppStatus.NotFound:
        setStatusMessage("NOT STARTED")
        // setStatusMessage("CLOSED") Uncomment to Close Applications
        break
      default:
        setStatusMessage("ERROR")
        break
    }
  }, [appStatus])

  const history = useHistory()

  const onRedirect = () => {
    history.push("/")
  }

  const startApp = () => {
    nextPage()
  }

  return (
    <div className='application-status-component'>
      <MainPage status={statusMessage}>
        {statusMessage !== "NOT STARTED" && (
          <button
            type='button'
            className='application-status-component__button'
            onClick={onRedirect}
          >
            <div>Return Home</div>
          </button>
        )}
        {statusMessage === "NOT STARTED" && (
          <button
            type='button'
            className='application-status-component__button'
            onClick={startApp}
          >
            <div>Start App</div>
          </button>
        )}
      </MainPage>
    </div>
  )
}

export default ApplicationStatus

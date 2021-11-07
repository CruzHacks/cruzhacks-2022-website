import React, { useEffect, useState } from "react"
import "./index.scss"
import { useHistory } from "react-router-dom"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import AppStatus from "Props/portal/application"
import Button from "components/Button/Button"
import MainPage from "../ApplicationForm/MainPage/index.view"

const ApplicationStatus: React.FC = () => {
  const { nextPage, appStatus } = useApplication()!
  const [statusMessage, setStatusMessage] = useState<string>("")

  useEffect(() => {
    switch (appStatus) {
      case AppStatus.Loading:
        setStatusMessage("Loading...")
        break
      case AppStatus.Pending:
        setStatusMessage("Pending")
        break
      case AppStatus.Accepted:
        // TODO: This might have to be its own component if the layout differs
        setStatusMessage("Accepted")
        break
      case AppStatus.Rejected:
        setStatusMessage("Rejected")
        break
      case AppStatus.NotFound:
        setStatusMessage("Open")
        break
      default:
        setStatusMessage("Error")
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
        {appStatus !== AppStatus.NotFound && (
          <Button modifier='secondary' label='returnHome' onClick={onRedirect}>
            Return Home
          </Button>
        )}
        {appStatus === AppStatus.NotFound && (
          <Button modifier='secondary' label='startApp' onClick={startApp}>
            Start App
          </Button>
        )}
      </MainPage>
    </div>
  )
}

export default ApplicationStatus

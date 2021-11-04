import React, { useEffect, useState } from "react"
import "./index.scss"
import { useHistory } from "react-router-dom"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import AppStatus from "Props/portal/application"
import Button from "components/Button/Button"

const ApplicationStatus: React.FC = () => {
  // TODO: Update messages according to design.
  //  We might also need to split this into more components if they don't have a similar layout.

  const { nextPage, appStatus } = useApplication()!
  const [statusMessage, setStatusMessage] = useState<String>("")

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
      <div className='application-status-component__header'>
        Welcome, Hacker
      </div>
      <div className='application-status-component__status'>
        Status {statusMessage}
      </div>
      <Button modifier='secondary' label='hello' onClick={onRedirect}>
        Return Home
      </Button>
      <Button modifier='secondary' label='hello' onClick={startApp}>
        Start App
      </Button>
    </div>
  )
}

export default ApplicationStatus

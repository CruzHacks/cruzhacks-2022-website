import React from "react"
import "./index.scss"
import { useHistory } from "react-router-dom"
import AppStatus from "Props/portal/application"
import Button from "components/Button/Button"

interface IProps {
  status: number
  onClick: any
}

const ApplicationStatus: React.FC<IProps> = ({ status, onClick }: IProps) => {
  // TODO: Update messages according to design.
  //  We might also need to split this into more components if they don't have a similar layout.
  const history = useHistory()

  const onRedirect = () => {
    history.push("/")
  }

  let message
  switch (status) {
    case AppStatus.Loading:
      message = "Loading..."
      break
    case AppStatus.Pending:
      message =
        "We've received your application! You will be notified once we process your application."
      break
    case AppStatus.Accepted:
      // TODO: This might have to be its own component if the layout differs
      message = "Congratulations! Your application has been accepted."
      break
    case AppStatus.Rejected:
      message = "Unfortunately, your application has been rejected."
      break
    case AppStatus.NotFound:
      message = "No Application Exists"
      break
    default:
      message = "An error occurred."
      break
  }

  return (
    <div className='application-status-component'>
      <div className='application-status-component__header'>
        Welcome, Hacker
      </div>
      <div className='application-status-component__status'>
        Status {message}
      </div>
      <Button label='hello' onClick={onRedirect}>
        Return Home
      </Button>
      <Button label='hello' onClick={onClick}>
        Start App
      </Button>
    </div>
  )
}

export default ApplicationStatus

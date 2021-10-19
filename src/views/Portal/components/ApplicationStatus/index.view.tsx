import React from "react"
import "./index.scss"
import AppStatus from "Props/portal/application"

interface IProps {
  status: number
}

const ApplicationStatus: React.FC<IProps> = ({ status }: IProps) => {
  // TODO: Update messages according to design.
  //  We might also need to split this into more components if they don't have a similar layout.
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
    default:
      message = "An error occurred."
      break
  }

  return <div className='application-status-component'>{message}</div>
}

export default ApplicationStatus

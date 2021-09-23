import * as React from "react"
import "./index.scss"
import { useHistory } from "react-router-dom"
import Button from "../../components/Button/Button"

const ErrorView: React.FC = () => {
  const history = useHistory()

  const redirect = () => {
    history.push("/")
  }
  return (
    <div className='error-view'>
      <div className='error-view-text'>
        <div className='error-view-message'>error</div>
        <div className='error-view-message'>404</div>
      </div>
      <Button label='error-view-button' onClick={redirect}>
        Return Home
      </Button>
    </div>
  )
}

export default ErrorView

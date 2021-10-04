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
      <div>
        <div className='error-view__message'>E R R O R</div>
        <div className='error-view__message'>404</div>
      </div>
      <Button
        label='error-view'
        className='error-view__button Button--primary'
        onClick={redirect}
      >
        Return Home
      </Button>
    </div>
  )
}

export default ErrorView

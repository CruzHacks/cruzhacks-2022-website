import * as React from "react"
import "./index.scss"
import { useHistory } from "react-router-dom"
// import { ReactComponent as Waves } from "images/error/waves.svg"
import WavesImage from "images/error/waves.svg"
// import { ReactComponent as BiggerWaves } from "images/error/waves_dropshadow.svg"
import BiggerWavesImage from "images/error/waves_dropshadow.svg"

import Button from "../../components/Button/Button"

const ErrorView: React.FC = () => {
  const history = useHistory()

  const redirect = () => {
    history.push("/")
  }
  return (
    <div className='error-view'>
      <div className='error-view__wavesdiv'>
        {/* <Waves className='error-view__waves' /> */}
        {/* <BiggerWaves className='error-view__wavesbig' /> */}
        <img src={WavesImage} alt='waves' className='error-view__waves' />
        <img
          src={BiggerWavesImage}
          alt='wavesbig'
          className='error-view__wavesbig'
        />
      </div>
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

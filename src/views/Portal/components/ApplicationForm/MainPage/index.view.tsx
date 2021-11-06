import React from "react"
import "./index.scss"

interface MainPageProps {
  status: string
  progress: number
}

interface ProgressBarProps {
  progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
}: ProgressBarProps) => (
  <div className='progress-bar'>
    <div className='progress-bar--fill' style={{ width: `${progress}%` }} />
  </div>
)

const MainPage: React.FC<MainPageProps> = ({
  status,
  progress,
}: MainPageProps) => {
  const statColor = (stat: string) => {
    switch (stat) {
      case "NOT STARTED":
        return "#CF907A"
      case "IN PROGRESS":
        return "#B8AD4A"
      case "SUBMITTED":
        return "#4AA4B8"
      case "ACCEPTED":
        return "#4AB855"
      default:
        return "#000000"
    }
  }

  return (
    <div className='main-page'>
      <div className='main-page__container'>
        <div className='main-page__container--welcome'>WELCOME, HACKER</div>
        <div className='main-page__container--status-message'>
          <div className='main-page__container--status-message--stat'>
            STATUS&nbsp;
          </div>
          <div
            className='main-page__container--status-message--curr-stat'
            style={{ color: `${statColor(status)}` }}
          >
            {status}
          </div>
        </div>
        <div className='main-page__container--progress'>PROGRESS</div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  )
}

export default MainPage

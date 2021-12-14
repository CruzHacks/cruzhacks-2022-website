import React from "react"
import "./index.scss"
import ProgressBar from "components/ProgressBar/ProgressBar"
import ApplicationPages from "Props/portal/page"

interface MainPageProps {
  status: string
  progress: number
  children: React.ReactNode
}

const MainPage: React.FC<MainPageProps> = ({
  status,
  progress,
  children,
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
            STATUS&nbsp;&nbsp;
          </div>
          <div
            className='main-page__container--status-message--curr-stat'
            style={{ color: `${statColor(status)}` }}
          >
            {status}
          </div>
        </div>
        <div className='main-page__container--progress'>PROGRESS</div>
        <ProgressBar
          current={
            status === "SUBMITTED" ||
            status === "REJECTED" ||
            status === "ACCEPTED"
              ? ApplicationPages.MLH
              : progress
          }
          limit={ApplicationPages.MLH}
          className='__main'
        />
        {children}
      </div>
    </div>
  )
}

export default MainPage

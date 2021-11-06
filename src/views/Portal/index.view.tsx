import React from "react"
import "./index.scss"
// import { ApplicationProvider } from "components/ApplicationContext/ApplicationContext"
import ApplicationBackground from "./components/Background/index.view"
import MainPage from "./components/ApplicationForm/MainPage/index.view"

const PortalView: React.FC = () => (
  <ApplicationBackground>
    <MainPage status='ACCEPTED' progress={50} />
  </ApplicationBackground>
)

export default PortalView

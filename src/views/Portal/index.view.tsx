import React from "react"
import "./index.scss"
import { ApplicationProvider } from "components/ApplicationContext/ApplicationContext"
import ApplicationBackground from "./components/Background/index.view"

const PortalView: React.FC = () => (
  <ApplicationBackground>
    <ApplicationProvider />
  </ApplicationBackground>
)

export default PortalView

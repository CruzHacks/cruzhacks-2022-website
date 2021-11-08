import React from "react"
import Timer from "components/Timer/Timer"
import AppAnalytics from "components/AppAnalytics/AppAnalytics"
import "./index.scss"

const Analytics: React.FC = () => (
  <div className='analytics-component'>
    <Timer />
    <AppAnalytics />
  </div>
)

export default Analytics

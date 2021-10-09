import React from "react"
import Timer from "components/Timer/Timer"
import AppAnalytics from "components/AppAnalytics/AppAnalytics"

const Analytics: React.FC = () => (
  <div className='analytics-component'>
    <Timer />
    <AppAnalytics />
  </div>
)

export default Analytics

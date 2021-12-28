import * as React from "react"
import "./index.scss"
import { schedule } from "Props/schedule/schedule"
import ScheduleTable from "./components/ScheduleTable"

const Schedule: React.FC = () => (
  <div className='schedule-component'>
    <div className='schedule-component__header'>Schedule</div>
    <div className='schedule-component__container'>
      <ScheduleTable schedule={schedule} />
      <div className='schedule-component__footnote'>
        All times listed are in PST.
      </div>
    </div>
  </div>
)

export default Schedule

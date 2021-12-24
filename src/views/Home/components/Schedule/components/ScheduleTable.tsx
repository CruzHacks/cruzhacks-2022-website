import * as React from "react"
import "./index.scss"
import { ReactComponent as LeftArrow } from "images/schedule/left-arrow.svg"
import { ReactComponent as RightArrow } from "images/schedule/right-arrow.svg"
import { ScheduleDate } from "Props/schedule/schedule"
import { useState } from "react"

interface ScheduleTableProps {
  schedule: ScheduleDate[]
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({
  schedule,
}: ScheduleTableProps) => {
  const [page, setPage] = useState(0)

  const prevPage = () => {
    if (page > 0) setPage(page - 1)
  }

  const nextPage = () => {
    if (page < schedule.length - 1) setPage(page + 1)
  }

  const current = schedule[page]

  return (
    <div className='schedule-table'>
      <div className='schedule-table__table'>
        <div className='schedule-table__date'>{current.date}</div>
        {current.events.map(event => (
          <div className='schedule-table__event'>
            <div className='schedule-table__event__time'>{event.time}</div>
            <div className='schedule-table__event__text'>{event.event}</div>
          </div>
        ))}
      </div>
      <LeftArrow
        className='schedule-table__button schedule-table__button--previous'
        onClick={prevPage}
      />
      <RightArrow
        className='schedule-table__button schedule-table__button--next'
        onClick={nextPage}
      />
    </div>
  )
}

export default ScheduleTable

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
  const date = +new Date()
  let defaultPage = 0

  // +new Date(2022, 0, 15) -> 1642233600000
  // +new Date(2022, 0, 16) -> 1642320000000
  // +new Date(2022, 0, 17) -> 1642406400000
  if (date >= 1642233600000 && date < 1642320000000) {
    // January 15, 2022
    defaultPage = 1
  } else if (date >= 1642320000000 && date < 1642406400000) {
    // January 16, 2022
    defaultPage = 2
  }

  const [page, setPage] = useState(defaultPage)

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
        <div className='schedule-table__header'>{current.date}</div>
        <div className='schedule-table__container'>
          {current.events.map(event => (
            <div key={event.name} className='schedule-table__event'>
              <div className='schedule-table__event__time'>{event.time}</div>
              <div className='schedule-table__event__divider' />
              <div className='schedule-table__event__text'>{event.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='schedule-table__arrows'>
        <LeftArrow
          className='schedule-table__button schedule-table__button--previous'
          onClick={prevPage}
        />
        <RightArrow
          className='schedule-table__button schedule-table__button--next'
          onClick={nextPage}
        />
      </div>
    </div>
  )
}

export default ScheduleTable

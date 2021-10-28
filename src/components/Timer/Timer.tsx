import React, { useEffect, useState } from "react"
import "./Timer.scss"

interface Timer {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const TimeRemaining: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`1-14-2022`) - +new Date()
    let timeLeft = {
      days: "0",
      hours: "0",
      minutes: "0",
      seconds: "0",
    }

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)
      timeLeft = {
        days: (
          (days < 100 ? "0" : "") +
          (days < 10 ? "0" : "") +
          days
        ).toString(),
        hours: ((hours < 10 ? "0" : "") + hours).toString(),
        minutes: ((minutes < 10 ? "0" : "") + minutes).toString(),
        seconds: ((seconds < 10 ? "0" : "") + seconds).toString(),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState<Timer>({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  })

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  // const keys = ["days", "hours", "minutes", "seconds"]

  return (
    <div className='timer-component'>
      <div className='timer-component__time'>
        <div className='timer-component__clock'>
          <div className='timer-component__remaining'>
            {" "}
            {timeLeft.days.split("").map((char, index) => (
              <div className='timer-component__char' key={index.toString()}>
                {char}
              </div>
            ))}
          </div>
          <div className='timer-component__field'>Days</div>
        </div>
        :
        <div className='timer-component__clock'>
          <div className='timer-component__remaining'>
            {" "}
            {timeLeft.hours.split("").map((char, index) => (
              <div className='timer-component__char' key={index.toString()}>
                {char}
              </div>
            ))}
          </div>
          <div className='timer-component__field'>Hours</div>
        </div>
        :
        <div className='timer-component__clock'>
          <div className='timer-component__remaining'>
            {" "}
            {timeLeft.minutes.split("").map((char, index) => (
              <div className='timer-component__char' key={index.toString()}>
                {char}
              </div>
            ))}
          </div>
          <div className='timer-component__field'>Minutes</div>
        </div>
        :
        <div className='timer-component__clock'>
          <div className='timer-component__remaining'>
            {timeLeft.seconds.split("").map((char, index) => (
              <div className='timer-component__char' key={index.toString()}>
                {char}
              </div>
            ))}
          </div>
          <div className='timer-component__field'>Seconds</div>
        </div>
      </div>

      <div className='timer-component__header'>Until CruzHacks</div>
    </div>
  )
}

export default TimeRemaining

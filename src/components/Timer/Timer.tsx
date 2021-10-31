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
    // 1-14-2022 15:00
    const eventDate = new Date(2022, 0, 14, 15, 0)

    const difference = +eventDate - Date.now()

    if (difference < 0) {
      return undefined
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)

    return {
      // (days < 100 ? "0" : "") +
      days: ((days < 10 ? "0" : "") + days).toString(),
      hours: ((hours < 10 ? "0" : "") + hours).toString(),
      minutes: ((minutes < 10 ? "0" : "") + minutes).toString(),
      seconds: ((seconds < 10 ? "0" : "") + seconds).toString(),
    }
  }

  const [timeLeft, setTimeLeft] = useState<Timer>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const val = calculateTimeLeft()
      if (!val) {
        clearInterval(timer)
        return
      }

      setTimeLeft(val)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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
          <div className='timer-component__field'>days</div>
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
          <div className='timer-component__field'>hours</div>
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
          <div className='timer-component__field'>minutes</div>
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
          <div className='timer-component__field'>seconds</div>
        </div>
      </div>

      <div className='timer-component__header'>Until CruzHacks</div>
    </div>
  )
}

export default TimeRemaining

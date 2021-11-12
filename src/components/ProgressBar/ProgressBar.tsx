import React from "react"
import "./ProgressBar.scss"

interface ProgressBarProps {
  current: number
  limit: number
  className: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  limit,
  className,
}: ProgressBarProps) => {
  const progress = (current * 100) / limit
  return (
    <div className={`progress-bar${className}`}>
      <div className='progress-bar__fill' style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ProgressBar

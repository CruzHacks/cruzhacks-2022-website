import React from "react"
import "./index.scss"

interface ApplicationBackgroundProps {
  children: React.ReactNode
}

const ApplicationBackground: React.FC<ApplicationBackgroundProps> = ({
  children,
}: ApplicationBackgroundProps) => (
  <div className='application-background'>
    Our Background
    <div className='application-background__box'>{children}</div>
  </div>
)

export default ApplicationBackground

import React from "react"
import "./index.scss"
import { ReactComponent as Hills } from "images/application/hills.svg"
import { ReactComponent as Waves } from "images/application/waves.svg"

interface ApplicationBackgroundProps {
  children: React.ReactNode
}

const ApplicationBackground: React.FC<ApplicationBackgroundProps> = ({
  children,
}: ApplicationBackgroundProps) => (
  <div className='application-background'>
    <Hills className='application-background__hills' />
    <Waves className='application-background__waves' />
    <div className='application-background__context'>{children}</div>
  </div>
)

export default ApplicationBackground

import * as React from "react"
import "./AboutBox.scss"
import { AboutProps } from "Props/props"

const AboutBox: React.FC<AboutProps> = ({ title, description }: AboutProps) => (
  <div className='about-box'>
    <div className='about-box__title'>{title}</div>
    <div className='about-box__description'>{description}</div>
  </div>
)

export default AboutBox

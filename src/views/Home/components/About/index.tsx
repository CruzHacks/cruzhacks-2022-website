import * as React from "react"
import "./index.scss"
import { ReactComponent as BackgroundLineDesktop } from "images/icons/about-background-line.svg"
// Import ReactComponent Mobile Here Update
import { AboutProps } from "Props/props"
import AboutInformation from "Props/about/about"
import AboutBox from "./AboutBox/AboutBox"

const About: React.FC = () => (
  <div className='about-component'>
    <BackgroundLineDesktop className='about-component__background mobile' />
    <BackgroundLineDesktop className='about-component__background desktop' />
    <div className='about-component__information'>
      {AboutInformation.map(({ title, description }: AboutProps) => (
        <AboutBox title={title} description={description} key={title} />
      ))}
    </div>
  </div>
)

export default About

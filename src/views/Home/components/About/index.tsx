import * as React from "react"
import "./index.scss"
import { ReactComponent as BackgroundLineMobile } from "images/icons/about-background-line-mobile.svg"
import { ReactComponent as BackgroundLineDesktop } from "images/icons/about-background-line-desktop.svg"
import { AboutProps } from "Props/props"
import AboutInformation from "Props/about/about"
import AboutBox from "./AboutBox/AboutBox"

const About: React.FC = () => (
  <div className='about-component'>
    <BackgroundLineMobile className='about-component__background mobile' />
    <BackgroundLineDesktop className='about-component__background desktop' />
    <div className='about-component__information'>
      {AboutInformation.map(({ title, description }: AboutProps) => (
        <AboutBox title={title} description={description} key={title} />
      ))}
    </div>
  </div>
)

export default About

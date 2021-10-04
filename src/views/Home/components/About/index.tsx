import * as React from "react"
import "./index.scss"

const About: React.FC = () => (
  <div className='about-component_wrapper'>
    <div className='about-component header'>About Cruzhacks</div>
    <div className='about-component text'>
      CruzHacks is a hackathon that rewards new ideas and innovation— hackers
      have the chance to use creative and problem-solving skills to address
      real-world challenges. Open to individuals with any level of experience,
      Cruzhacks provides the opportunity to apply knowledge and use
      industry-leading tools to make an impact.
    </div>
    <div className='about-component header'> The Cruzhacks Mission </div>
    <div className='about-component text'>
      CruzHacks is a global event where people can collaborate, network, and
      wield technology to solve problems! Our initiative is to expand diversity
      in tech by sparking the drive to innovate within all our participants.
    </div>
  </div>
)

export default About

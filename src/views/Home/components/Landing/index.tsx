import React, { useEffect, useState } from "react"
import { ReactComponent as Visual } from "images/landing/landing-visual-desktop.svg"
import { ReactComponent as VisualMobile } from "images/landing/landing-visual-mobile.svg"
import { ReactComponent as Hills } from "images/landing/landing-hills.svg"
import { ReactComponent as HillsMobile } from "images/landing/landing-hills-mobile.svg"
import "./index.scss"
import Button from "components/Button/Button"
import EmailSubscription from "components/EmailSubscription"

const Landing: React.FC = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const resize = () => setMobile(window.innerWidth <= 768)
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  })

  // conditionally render the SVG based on screen size
  let visual = <Visual className='landing-component__visual' />
  if (mobile) {
    visual = <VisualMobile className='landing-component__visual' />
  }

  return (
    <div className='landing-component'>
      <div className='landing-component__container'>
        <div className='landing-component__section'>{visual}</div>

        <div className='landing-component__section'>
          <div className='landing-component__text-box'>
            <div className='landing-component__title'>CruzHacks 2023</div>
            <div className='landing-component__textContainer'>
              <div className='landing-component__description'>
                CruzHacks is the largest hackathon in Santa Cruz. Each year, we
                invite hundreds of students to develop solutions to real-world
                problems, pursue inclusion in tech, and kindle the spirit of
                innovation.
              </div>
              <div className='landing-component__dates'>
                January 13-15, 2023 &nbsp;&middot;&nbsp; In-Person @ UCSC
              </div>
              <div className='landing-component__subscriptionContainer'>
                <EmailSubscription />
              </div>
              <div className='landing-component__buttonContainer'>
                <Button
                  className='landing-component__button'
                  modifier='primary'
                  label='devpost button'
                  href='https://cruzhacks-2022.devpost.com/'
                >
                  2022 Devpost!
                </Button>
                {/** <Button
                  className='landing-component__button'
                  label='apps button'
                  modifier='primary'
                  href='https://forms.gle/2RZE3x4KTcr1WAuF8'
                >
                  2023 Organizer Application
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {mobile && <HillsMobile className='landing-component__hillsMobile' />}
      <Hills className='landing-component__hills' />
    </div>
  )
}

export default Landing

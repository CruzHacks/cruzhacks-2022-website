import React, { useEffect, useState } from "react"
import { ReactComponent as Visual } from "images/landing/landing-visual-desktop.svg"
import { ReactComponent as VisualMobile } from "images/landing/landing-visual-mobile.svg"
import { ReactComponent as Hills } from "images/landing/landing-hills.svg"
import { ReactComponent as HillsMobile } from "images/landing/landing-hills-mobile.svg"
import "./index.scss"
import Button from "components/Button/Button"
import EmailSubscription from "components/EmailSubscription"
import PuzzleModal from "components/PuzzleModal"

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
            <PuzzleModal
              question='Unscramble this word: actakhohn'
              answer='hackathon'
            >
              <div className='landing-component__title'>CruzHacks 2022</div>
            </PuzzleModal>
            <div className='landing-component__textContainer'>
              <div className='landing-component__description'>
                CruzHacks is the largest hackathon in Santa Cruz. Each year, we
                invite hundreds of students to develop solutions to real-world
                problems, pursue inclusion in tech, and kindle the spirit of
                innovation.
              </div>
              <div className='landing-component__dates'>
                January 14-16, 2022 &nbsp;&middot;&nbsp; Virtual
              </div>
              <div className='landing-component__subscriptionContainer'>
                <EmailSubscription />
              </div>
              <div className='landing-component__buttonContainer'>
                <Button
                  className='landing-component__button'
                  modifier='primary'
                  label='sponsor button'
                  href='https://docs.google.com/forms/d/e/1FAIpQLSfXrKQS69kBkP6J5yfJRKP9XqDOqk_AW3Cq-Ya-kEXTfQOHUg/viewform'
                >
                  mentor/judge application
                </Button>
                <Button
                  className='landing-component__button'
                  label='apps button'
                  modifier='primary'
                  href='/portal'
                  redirect
                >
                  hacker apps closed
                </Button>
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

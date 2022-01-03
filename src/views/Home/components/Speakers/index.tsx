import * as React from "react"
import "./index.scss"
import speakerCards from "Props/speakers/cards"
import { CardProps } from "Props/props"
import SpeakerCard from "./SpeakerCard/SpeakerCard"

const Speakers: React.FC = () => (
  <div className='speakers-component'>
    <div className='speakers-component__header'>
      <div className='speakers-component__header__text'>Keynote Speakers</div>
      <div className='speakers-component__header__hr' />
    </div>
    <div className='speakers-component__container'>
      {speakerCards.map(({ name, title, imgSrc, LinkedInLink }: CardProps) => (
        <SpeakerCard
          key={name}
          name={name}
          imgSrc={imgSrc}
          title={title}
          LinkedInLink={LinkedInLink}
        />
      ))}
    </div>
  </div>
)

export default Speakers

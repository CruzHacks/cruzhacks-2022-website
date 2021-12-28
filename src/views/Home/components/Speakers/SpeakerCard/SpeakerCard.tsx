import * as React from "react"
import "./index.scss"
import { CardProps } from "Props/props"
import { ReactComponent as ImgBorder } from "images/speakers/border.svg"

const SpeakerCard: React.FC<CardProps> = ({
  name,
  title,
  imgSrc,
}: CardProps) => (
  <div className='speaker-card'>
    <div className='speaker-card__img-container'>
      <ImgBorder className='speaker-card__img-border' />
      <img src={imgSrc} alt={name} className='speaker-card__image' />
    </div>

    {/* main card section */}
    <div className='speaker-card__container'>
      <div className='speaker-card__name'>{name}</div>
      <div className='speaker-card__title'>
        {title.split("\n").map(val => (
          <div key={btoa(val)} className='speaker-card__title__line'>
            {val}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default SpeakerCard

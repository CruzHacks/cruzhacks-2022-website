import * as React from "react"
import "./index.scss"
import { CardProps } from "Props/props"
import { ReactComponent as ImgOverlay } from "images/speakers/overlay.svg"

const SpeakerCard: React.FC<CardProps> = ({
  name,
  title,
  imgSrc,
}: CardProps) => (
  <div className='speaker-card'>
    <div className='speaker-card__img-container'>
      <ImgOverlay className='speaker-card__img-overlay' />
      <img src={imgSrc} alt={name} className='speaker-card__image' />
    </div>
    <div className='speaker-card__card-container'>
      <div className='speaker-card__name'>{name}</div>
      <div className='speaker-card__title'>
        {title.split("\n").map(val => (
          <>
            {val}
            <br />
          </>
        ))}
      </div>
    </div>
  </div>
)

export default SpeakerCard

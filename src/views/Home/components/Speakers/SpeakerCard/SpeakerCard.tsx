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

    {/* main card section */}
    <div className='speaker-card__container'>
      <div className='speaker-card__name'>{name}</div>
      <div className='speaker-card__title'>
        {title.split("\n").map(val => (
          <div className='speaker-card__title__line'>{val}</div>
        ))}
      </div>
    </div>
  </div>
)

export default SpeakerCard

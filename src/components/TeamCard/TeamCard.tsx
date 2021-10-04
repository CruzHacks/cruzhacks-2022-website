import React from "react"
import "./TeamCard.scss"
import { CardProps } from "Props/props"
import cards from "Props/TeamCardProps/cards"
import LiLogo from "./fancylinkedin.svg"

const TeamCard: React.FC<CardProps> = ({
  name,
  imgsrc,
  title,
  LinkedInLink,
}) => (
  <div className='Card'>
    <img src={imgsrc} alt={name} className='Card__Image' />
    <div className='Card__Name'>{name}</div>
    <div className='Card__Title'>{title}</div>
    <div className='Card__Logo'>
      <div className='Card__Logo__LogoBg'>
        <a href={LinkedInLink}>
          <img src={LiLogo} alt='LinkedIn Logo' />
        </a>
      </div>
    </div>
  </div>
)

const TeamGrid: React.FC = () => (
  <div className='team-grid'>
    {cards.map(({ name, title, imgsrc }: CardProps) => (
      <TeamCard name={name} imgsrc={imgsrc} title={title} />
    ))}
  </div>
)

export default TeamGrid

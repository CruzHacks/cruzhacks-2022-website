import React from "react"
import "./TeamCard.scss"
import { CardProps } from "Props/props"
import cards from "Props/teamCardProps/cards"
import LiLogo from "images/icons/fancylinkedin.svg"

const TeamCard: React.FC<CardProps> = ({
  name,
  imgSrc,
  title,
  LinkedInLink,
}: CardProps) => (
  <div className='Card'>
    <img src={imgSrc} alt={name} className='Card__Image' />
    <div className='Card__Name'>{name}</div>
    <div className='Card__Title'>{title}</div>
    <div className='Card__Logo'>
      <a href={LinkedInLink}>
        <div className='Card__Logo__LogoBg'>
          <img src={LiLogo} alt='LinkedIn Logo' />
        </div>
      </a>
    </div>
  </div>
)

const TeamGrid: React.FC = () => (
  <div className='team-grid'>
    {cards.map(({ name, title, imgSrc, LinkedInLink }: CardProps) => (
      <TeamCard
        key={name}
        name={name}
        imgSrc={imgSrc}
        title={title}
        LinkedInLink={LinkedInLink}
      />
    ))}
  </div>
)

export default TeamGrid

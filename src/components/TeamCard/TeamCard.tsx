import React from "react"
import "./TeamCard.scss"
import LiLogo from "./fancylinkedin.svg"
import cat from "./cat.jpg"

interface CardProps {
  name: string
  imgsrc: string
  imgalt: string
  title: string
}

const TeamCard: React.FC<CardProps> = ({ name, imgsrc, imgalt, title }) => (
  <div className='Card'>
    <img src={imgsrc} alt={imgalt} className='Image' />
    <p className='Name'>{name}</p>
    <p className='Title'>{title}</p>
    <div className='LogoWrapper'>
      <div className='LogoBg'>
        <img src={LiLogo} alt='LinkedIn Logo' />
      </div>
    </div>
  </div>
)

const TeamGrid: React.FC = () => (
  <div className='team-grid'>
    <TeamCard
      name='Sidhanta Sharma'
      title='Engineering'
      imgsrc={cat}
      imgalt='picture'
    />
    <TeamCard
      name='Sidhanta Sharma'
      title='Engineering'
      imgsrc={cat}
      imgalt='picture'
    />
    <TeamCard
      name='Sidhanta Sharma'
      title='Engineering'
      imgsrc={cat}
      imgalt='picture'
    />
    <TeamCard
      name='Sidhanta Sharma'
      title='Engineering'
      imgsrc={cat}
      imgalt='picture'
    />
    <TeamCard
      name='Sidhanta Sharma'
      title='Engineering'
      imgsrc={cat}
      imgalt='picture'
    />
    <TeamCard
      name='Sidhanta Sharma'
      title='Engineering'
      imgsrc={cat}
      imgalt='picture'
    />
    <TeamCard
      name='Sidhanta Sharma'
      title='Engineering'
      imgsrc={cat}
      imgalt='picture'
    />
    <TeamCard
      name='Sidhanta Sharma'
      title='Engineering'
      imgsrc={cat}
      imgalt='picture'
    />
  </div>
)

export default TeamGrid

import React from "react"
import "./TeamCard.scss"
import LiLogo from "./fancylinkedin.svg"
import cat from "./cat.jpg"

interface CardProps {
  name: string
  imgsrc: string
  title: string
}

const TeamCard: React.FC<CardProps> = ({ name, imgsrc, title }) => (
  <div className='Card'>
    <img src={imgsrc} alt={name} className='Card__Image' />
    <p className='Card__Name'>{name}</p>
    <p className='Card__Title'>{title}</p>
    <div className='Card__Logo'>
      <div className='Card__Logo__LogoBg'>
        <img src={LiLogo} alt='LinkedIn Logo' />
      </div>
    </div>
  </div>
)

const TeamGrid: React.FC = () => (
  <div className='team-grid'>
    <TeamCard name='Sonali Malik' title='President' imgsrc={cat} />
    <TeamCard name='Tony Ma' title='President' imgsrc={cat} />
    <TeamCard
      name='Krishna Pandian'
      title='Director of Engineering'
      imgsrc={cat}
    />
    <TeamCard name='Hannah Wong' title='Director of Marketing' imgsrc={cat} />
    <TeamCard name='Navya Rao' title='Director of Design' imgsrc={cat} />
    <TeamCard name='Tracy Rocha' title='Director of Logistics' imgsrc={cat} />
    <TeamCard name='Katie Allen' title='Director of Sponsorship' imgsrc={cat} />
    <TeamCard name='Alper deCarion' title='Engineering' imgsrc={cat} />
    <TeamCard name='Rahul Vaidun' title='Engineering' imgsrc={cat} />
    <TeamCard name='Sidhanta Sharma' title='Engineering' imgsrc={cat} />
    <TeamCard name='William Gao' title='Engineering' imgsrc={cat} />
    <TeamCard name='Avani Karkare' title='Marketing' imgsrc={cat} />
    <TeamCard name='Chinmay Gowdru' title='Marketing' imgsrc={cat} />
    <TeamCard name='Eric Duong' title='Marketing' imgsrc={cat} />
    <TeamCard name='Eliot Winchell' title='Design' imgsrc={cat} />
    <TeamCard name='Glomarie Ramos' title='Engineering' imgsrc={cat} />
    <TeamCard name='Khushi Shah' title='Design' imgsrc={cat} />
    <TeamCard name='Ajay Bhatia' title='Logistics' imgsrc={cat} />
    <TeamCard name='Brenden Teo' title='Logistics' imgsrc={cat} />
    <TeamCard name='Shantelle Toh' title='Engineering' imgsrc={cat} />
    <TeamCard name='Vince Guan' title='Engineering' imgsrc={cat} />
    <TeamCard name='Jiewen Li' title='Engineering' imgsrc={cat} />
    <TeamCard name='Michelle Sheu' title='Sponsorship' imgsrc={cat} />
  </div>
)

export default TeamGrid

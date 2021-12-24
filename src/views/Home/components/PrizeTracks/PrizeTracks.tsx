import * as React from "react"
import "./PrizeTracks.scss"
import HealthHacks from "./SVGS/HealthHacks"
import BeginnerHacks from "./SVGS/BeginnerHacks"
import EarthHacks from "./SVGS/EarthHacks"
import GoldenStateHacks from "./SVGS/GoldenStateHacks"
import JusticeHacks from "./SVGS/JusticeHacks"
import UIUXHacks from "./SVGS/UIUXHacks"

interface CircleProps {
  image: any
  hoverText: string
}

const Tracks = [
  [<HealthHacks />, "Health Hacks", 0],
  [<JusticeHacks />, "Justice Hacks", 2],
  [<EarthHacks />, "Earth Hacks", 1],
  [<BeginnerHacks />, "Beginner Hacks", 3],
  [<GoldenStateHacks />, "Golden State Hacks", 4],
  [<UIUXHacks />, "UI UX Hacks", 5],
]

const Circle: React.FC<CircleProps> = ({ image, hoverText }: CircleProps) => {
  const [isHovered, setHover] = React.useState<boolean>(false)
  return (
    <div
      className='prizeTracks__images__container'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isHovered ? (
        <div className='prizeTracks__images__container--hover'>
          <div>
            {hoverText}
          </div>
        </div>
      ) : null}
      <div className='prizeTracks__images__container--image'>{image}</div>
    </div>
  )
}

const PrizeTracks: React.FC = () => (
  <div className='prizeTracks'>
    <div className='prizeTracks__title'>
      <div className='prizeTracks__title__container'>
        <div className='prizeTracks__title__container--header'>
          Prize Tracks
        </div>
      </div>
    </div>
    <div className='prizeTracks__images'>
      {Tracks.map(image => (
        <Circle
          image={image[0]}
          hoverText={image[1] as string}
          key={image[2] as number}
        />
      ))}
    </div>
  </div>
)

export default PrizeTracks

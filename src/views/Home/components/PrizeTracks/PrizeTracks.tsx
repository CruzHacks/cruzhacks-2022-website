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
}

const Tracks = [
  [<HealthHacks />, 0],
  [<EarthHacks />, 1],
  [<JusticeHacks />, 2],
  [<BeginnerHacks />, 3],
  [<GoldenStateHacks />, 4],
  [<UIUXHacks />, 5],
]

const Circle: React.FC<CircleProps> = ({ image }: CircleProps) => (
  <div className='prizeTracks__images--circle__container'>
    <div className='prizeTracks__images--circle__container--image'>{image}</div>
  </div>
)

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
        <Circle image={image[0]} />
      ))}
    </div>
  </div>
)

export default PrizeTracks

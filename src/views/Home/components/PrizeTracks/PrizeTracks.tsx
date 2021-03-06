import * as React from "react"
import "./PrizeTracks.scss"
import { ReactComponent as HealthHacks } from "images/tracks/health_hacks.svg"
import { ReactComponent as BeginnerHacks } from "images/tracks/beginner_hacks.svg"
import { ReactComponent as EducationHacks } from "images/tracks/education_hacks.svg"
import { ReactComponent as GoldenStateHacks } from "images/tracks/golden_state_hacks.svg"
import { ReactComponent as JusticeHacks } from "images/tracks/justice_hacks.svg"
import { ReactComponent as UIUXHacks } from "images/tracks/ui_ux_hacks.svg"

interface CircleProps {
  image: any
  hoverText: string
}

const Tracks = [
  [
    <HealthHacks className='prizeTracks--svg-shadow prizeTracks--track-img-dimensions' />,
    "Health Hacks",
    0,
  ],
  [
    <JusticeHacks className='prizeTracks--svg-shadow prizeTracks--track-img-dimensions-justice' />,
    "Justice Hacks",
    2,
  ],
  [
    <EducationHacks className='prizeTracks--svg-shadow prizeTracks--track-img-dimensions-education' />,
    "Education Hacks",
    1,
  ],
  [
    <BeginnerHacks className='prizeTracks--svg-shadow prizeTracks--track-img-dimensions' />,
    "Beginner Hacks",
    3,
  ],
  [
    <GoldenStateHacks className='prizeTracks--track-img-dimensions-golden' />,
    "Golden State Hacks",
    4,
  ],
  [
    <UIUXHacks className='prizeTracks--svg-shadow prizeTracks--track-img-dimensions prizeTracks--UIUX' />,
    "UI/UX Hacks",
    5,
  ],
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
          <div className='prizeTracks--unselectable'>{hoverText}</div>
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

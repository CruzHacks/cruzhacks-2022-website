import React from "react"
import "./MLHBadge.scss"

const MLHBadge: React.FC = () => (
  <a
    id='mlh-trust-badge'
    className='MLHBadge-component'
    href='https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=gray'
    target='_blank'
    rel='noreferrer'
  >
    <img
      className='MLHBadge-component__image'
      src='https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-gray.svg'
      alt='Major League Hacking 2022 Hackathon Season'
    />
  </a>
)

export default MLHBadge

import * as React from "react"
import "./index.scss"
import {
  SponsorProps,
  kiloSponsors,
  megaSponsors,
  gigaSponsors,
  teraSponsors,
} from "Props/sponsors/sponsors/props"

const Sponsors: React.FC = () => {
  const sponsorData = [
    { sponsorTier: "tera", sponsors: teraSponsors },
    { sponsorTier: "giga", sponsors: gigaSponsors },
    { sponsorTier: "mega", sponsors: megaSponsors },
    { sponsorTier: "kilo", sponsors: kiloSponsors },
  ]
  return (
    <div className='sponsors-container'>
      <div className='sponsors-container__header'>
        Thank you to our Sponsors
      </div>
      <div className='sponsors-container__text'>
        Powered by CIED and the UCSC Genomics Institute
      </div>
      <div className='sponsors-container__rows'>
        {sponsorData.map(data => (
          <div className='sponsors-container__row' key={data.sponsorTier}>
            {data.sponsors.map(({ image, url, key }: SponsorProps) => (
              <a
                key={key}
                href={url}
                rel='noreferrer'
                target='_blank'
                className='sponsors-container__sponsor'
              >
                <img
                  src={image}
                  alt=''
                  className='sponsors-container__sponsor-tier'
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Sponsors

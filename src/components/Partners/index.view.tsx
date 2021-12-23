import * as React from "react"
import "./index.scss"
import { PartnerProps, row1, row2, row3 } from "Props/sponsors/partners/props"

const Partners: React.FC = () => {
  const partnerRows = [
    { row: row1, key: "row1" },
    { row: row2, key: "row2" },
    { row: row3, key: "row3" },
  ]
  return (
    <div className='partners-container'>
      <div className='partners-container__header'>Partnered With</div>
      <div className='partners-container__rows'>
        {partnerRows.map(row => (
          <div className='partners-container__partners' key={row.key}>
            {row.row.map(({ image, url, key }: PartnerProps) => (
              <a href={url} key={key} className='partners-container__partner'>
                <img src={image} alt='' className='partners-container__image' />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Partners

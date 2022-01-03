import * as React from "react"
import "./index.scss"
import PartnersView from "components/Partners/index.view"
import SponsorsView from "components/Sponsors/index.view"

const Sponsors: React.FC = () => (
  <div className='sponsor-component'>
    <SponsorsView />
    <PartnersView />
  </div>
)
export default Sponsors

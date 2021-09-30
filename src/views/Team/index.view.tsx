import * as React from "react"
import "./index.scss"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import footerProps from "../../Props/footer/footer"
import footerTheme from "../../Props/footer/footerTheme"

const TeamView: React.FC = () => (
  <div className='team-view'>
    <NavBar />
    <p>Team Page Renders</p>
    <Footer socials={footerProps} theme={footerTheme.teamFooter} />
  </div>
)

export default TeamView

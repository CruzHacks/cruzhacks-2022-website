import * as React from "react"
import "./index.scss"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import footerProps from "../../Props/footer"

const TeamView: React.FC = () => (
  <div className='team-view'>
    <NavBar />
    <p>Team Page Renders</p>
    <Footer socials={footerProps} />
  </div>
)

export default TeamView

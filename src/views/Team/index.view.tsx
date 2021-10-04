import React from "react"
import "./index.scss"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import TeamGrid from "../../components/TeamCard/TeamCard"
import footerTheme from "../../Props/footer/footerTheme"

const TeamView: React.FC = () => (
  <div className='team-view'>
    <NavBar theme='team' />
    <div className='team-view__our-team'>OUR TEAM</div>
    <div className='team-view__small-message'>
      <div>Meet our team of creators, thinkers,</div>
      <div>strategists, and believers, collaborating</div>
      <div>together to create something amazing.</div>
    </div>
    <div className='team-view__team'>
      <TeamGrid />
    </div>
    <Footer theme={footerTheme.teamFooter} />
  </div>
)

export default TeamView

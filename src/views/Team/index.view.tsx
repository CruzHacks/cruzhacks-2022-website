import React from "react"
import "./index.scss"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import TeamGrid from "../../components/TeamCard/TeamCard"

const TeamView: React.FC = () => (
  <div className='team-view'>
    <NavBar />
    <div className='team-view__our-team'>OUR TEAM</div>
    <div className='team-view__small-message'>
      Meet our team of creators, thinkers,
      <br />
      strategists, and believers, collaborating
      <br />
      together to create something amazing.
    </div>
    <div className='team-view__team'>
      <TeamGrid />
    </div>
    <Footer />
  </div>
)

export default TeamView

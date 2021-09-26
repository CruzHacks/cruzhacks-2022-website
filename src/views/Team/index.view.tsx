import React from "react"
import "./index.scss"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import TeamGrid from "../../components/TeamCard/TeamCard"

const TeamView: React.FC = () => (
  <div className='team-view'>
    <NavBar />
    <div className='team-body'>
      <TeamGrid />
    </div>
    <Footer />
  </div>
)

export default TeamView

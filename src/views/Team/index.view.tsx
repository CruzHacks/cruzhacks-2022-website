import * as React from "react"
import "./index.scss"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"

const TeamView: React.FC = () => (
  <div className='team-view'>
    <NavBar />
    <p>Team Page Renders</p>
    <Footer />
  </div>
)

export default TeamView

import * as React from "react"
import "./index.scss"
import About from "./components/About"
import FAQ from "./components/FAQ"
import Sponsors from "./components/Footer/Sponsors"
import Landing from "./components/Landing"
import Milestones from "./components/Milestones"
import Tracks from "./components/Tracks"

const HomeView: React.FC = () => (
  <div className='home-view'>
    <p>Home</p>
    <Landing />
    <About />
    <Milestones />
    <Tracks />
    <FAQ />
    <Sponsors />
  </div>
)

export default HomeView

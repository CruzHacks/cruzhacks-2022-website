import * as React from "react"
import "./index.scss"
import About from "./components/About"
// import FAQ from "./components/FAQ"
// import Sponsors from "./components/Sponsors"
// import Tracks from "./components/Tracks"
import Landing from "./components/Landing"
import Milestones from "./components/Milestones"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"

const HomeView: React.FC = () => (
  <div className='home-view'>
    <NavBar theme='home' />
    <Landing />
    <About />
    <Milestones />
    {/* <Tracks />
    <FAQ />
    <Sponsors /> */}
    <Footer />
  </div>
)

export default HomeView

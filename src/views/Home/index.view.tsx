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
import footerTheme from "../../Props/footer/footerTheme"
import FAQ from "./components/FAQ"

const HomeView: React.FC = () => (
  <div className='home-view'>
    <NavBar theme='home' />
    <Landing />
    <About />
    <Milestones />
    <FAQ />
    {/* <Tracks />
    <FAQ />
    <Sponsors /> */}
    <Footer theme={footerTheme.homeFooter} />
  </div>
)

export default HomeView

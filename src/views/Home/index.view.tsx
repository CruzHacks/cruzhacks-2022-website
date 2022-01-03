import * as React from "react"
import "./index.scss"
import MLHBadge from "components/MLHBadge/MLHBadge"
import NavBar from "../../components/NavBar/NavBar"
import Landing from "./components/Landing"
import About from "./components/About"
import Milestones from "./components/Milestones"
// import Tracks from "./components/Tracks"
import Speakers from "./components/Speakers"
import Schedule from "./components/Schedule"
import FAQ from "./components/FAQ"
import Sponsors from "./components/Sponsors"
import Footer from "../../components/Footer/Footer"
import footerTheme from "../../Props/footer/footerTheme"

const HomeView: React.FC = () => (
  <div className='home-view'>
    <MLHBadge />
    <NavBar theme='home' />
    <Landing />
    <About />
    <Milestones />
    {/* <Tracks /> */}
    <Speakers />
    <Schedule />
    <FAQ />
    <Sponsors />
    <Footer theme={footerTheme.homeFooter} />
  </div>
)

export default HomeView

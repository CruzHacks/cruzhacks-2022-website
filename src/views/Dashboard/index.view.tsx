import React from "react"
import "./index.scss"
import Navbar from "components/NavBar/NavBar"
import AddAnnouncement from "./components/AddAnnouncement/index.view"
import AnnouncementsListed from "./components/AnnouncementsListed/index.view"
import Analytics from "./components/Analytics/index.view"

const DashboardView: React.FC = () => (
  <div className='dashboard-view'>
    <Navbar theme='home' />
    <div className='dashboard-view__container'>
      <div className='dashboard-view__header'>Organizer&apos;s View</div>
      <div className='dashboard-view__components'>
        {/* left panel */}
        <div className='dashboard-view__announcements'>
          <AddAnnouncement />
          <AnnouncementsListed />
        </div>
        {/* right panel */}
        <div className='dashboard-view__analytics'>
          <Analytics />
        </div>
      </div>
    </div>
  </div>
)

export default DashboardView

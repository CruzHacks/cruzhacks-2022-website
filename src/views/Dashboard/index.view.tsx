import * as React from "react"
import "./index.scss"
import Navbar from "components/NavBar/NavBar"
import AddAnnouncement from "./AddAnnouncement/index.view"
import AnnouncmentsListed from "./AnnouncementsListed/index.view"
import Analytics from "./Analytics/index.view"

const DashboardView: React.FC = () => (
  <div className='dashboard-view'>
    <Navbar theme='home' />
    <div className='dashboard-view__header'>Organizer&apos;s View</div>
    <div className='dashboard-view__components'>
      <div className='dashboard-view__announcements'>
        <div className='dashboard-view__announcements-header'>
          Announcements
        </div>
        <AddAnnouncement />
        <AnnouncmentsListed />
      </div>
      <div className='dashboard-view__analytics'>
        <div className='dashboard-view__analytics-header'>Analytics</div>
        <Analytics />
      </div>
    </div>
  </div>
)

export default DashboardView

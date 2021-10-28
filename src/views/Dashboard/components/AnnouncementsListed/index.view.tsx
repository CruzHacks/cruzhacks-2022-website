import React, { useEffect, useState } from "react"
import { store, retrieve } from "utils/Storage"
import { getAllAnnouncements } from "utils/Api"
import { AnnouncementProps } from "Props/props"
import "./index.scss"

const AnnouncementsListed: React.FC = () => {
  const [announcements, setAnnouncements] = useState([])
  const [error, setError] = useState<string>("")
  useEffect(() => {
    const storageAnnouncements = retrieve("announcements", "")

    if (storageAnnouncements === "") {
      getAllAnnouncements().then(res => {
        if (res.status !== 200) {
          setError("Unable to Fetch Announcements")
        } else {
          setAnnouncements(JSON.parse(res.data.announcements))
          store("announcements", JSON.parse(res.data.announcements), 2 * 60)
        }
      })
    } else {
      setAnnouncements(storageAnnouncements)
    }
  }, [])

  return (
    <div className='announcements-listed-component'>
      {!error &&
        announcements.map(({ id, title, message, date }: AnnouncementProps) => {
          const announcementDate = new Date(date)
          const month = announcementDate.getMonth()
          const year = announcementDate.getFullYear()
          const day = announcementDate.getDate()
          const hour = announcementDate.getHours()
          const minutes =
            announcementDate.getMinutes() > 9
              ? announcementDate.getMinutes().toString()
              : `0${announcementDate.getMinutes().toString()}`
          const newDate = `${month}/${day}/${year} ${hour}:${minutes} PST`
          return (
            <div className='announcement-box' key={id}>
              <div className='announcement-box__title'>{title}</div>
              <div className='announcement-box__date'>{newDate}</div>
              <div className='announcement-box__message'>{message}</div>
            </div>
          )
        })}
      {!error && announcements.length === 0 && (
        <div className='announcements-listed-component__message'>
          There are no viewable announcements!
        </div>
      )}
      {error && (
        <div className='announcements-listed-component__message'>
          Unable to fetch announcements :(
        </div>
      )}
    </div>
  )
}

export default AnnouncementsListed

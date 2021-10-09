import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { postAnnouncement } from "utils/Api"
import CoolDownButton from "components/Button/CoolDownButton"
import "./index.scss"

const AddAnnouncement: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [message, setMessage] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const [note, setNote] = useState<string>("")
  const [disabled, setDisabled] = useState<boolean>(false)
  const [display, setDisplay] = useState<boolean>(false)

  const onSubmit = async () => {
    // event.preventDefault()
    setDisabled(true)
    if (title.length <= 0 || title.length >= 50) {
      setNote("Invalid Title")
      setDisabled(false)
      return
    }
    if (message.length <= 0 || message.length >= 200) {
      setNote("Invalid Message")
      setDisabled(false)
      return
    }
    if (!/^[a-zA-Z0-9 ]+$/.test(title) || !/^[a-zA-Z0-9 ]+$/.test(message)) {
      setNote("Alphanumeric Characters Only")
      setDisabled(false)
      return
    }
    const token = await getAccessTokenSilently()
    postAnnouncement(token, title, message)
      .then(res => {
        if (res.status !== 201) {
          setNote("Unable to Submit Announcement")
        } else {
          setNote("You have Submitted an Announcement")
        }
        setTitle("")
        setMessage("")
        setDisabled(false)
      })
      // eslint-disable-next-line no-unused-vars,
      .catch(err => {
        setNote("An error occurred while submitting")
        setDisabled(false)
      })
  }

  const onClick = () => {
    setDisplay(!display)
  }

  return (
    <div className='add-announcement-component'>
      <div className='add-announcement-component__header'>
        <div className='add-announcement-component__header-box large'>
          Announcements
        </div>
        <div className='add-announcement-component__header-box small'>
          <button type='button' onClick={onClick}>
            {display ? "-" : "+"} New
          </button>
        </div>
      </div>
      {display && (
        <div className='add-announcement-component__form'>
          <div className='add-announcement-component__field'>
            <input
              className='add-announcement-component__textbox'
              onChange={e => setTitle(e.target.value)}
              maxLength={25}
              placeholder='title'
            />
          </div>
          <div className='add-announcement-component__field'>
            <textarea
              className='add-announcement-component__textbox'
              onChange={e => setMessage(e.target.value)}
              maxLength={100}
              placeholder='message'
            />
          </div>
          <div className='add-announcement-component__field'>
            <CoolDownButton
              disabled={disabled}
              onClick={onSubmit}
              label='submit'
              className='add-announcement-component__submit'
              duration={30 * 1000}
            >
              Submit
            </CoolDownButton>
            {/* <button type='submit' disabled={disabled}>
                Submit
              </button> */}
          </div>

          {note && (
            <div className='add-announcement-component__form-note'>{note}</div>
          )}
        </div>
      )}
    </div>
  )
}

export default AddAnnouncement

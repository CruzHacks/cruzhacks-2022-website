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
      setNote("Invalid title")
      setDisabled(false)
      return
    }

    if (message.length <= 0 || message.length >= 200) {
      setNote("Invalid message")
      setDisabled(false)
      return
    }

    if (!/^[a-zA-Z0-9 ]+$/.test(title) || !/^[a-zA-Z0-9 ]+$/.test(message)) {
      // TODO: we would want punctuations right?
      setNote("Alphanumeric characters only")
      setDisabled(false)
      return
    }

    const token = await getAccessTokenSilently()
    postAnnouncement(token, title, message)
      .then(res => {
        if (res.status !== 201) {
          setNote("Unable to submit announcement")
        } else {
          setNote("You have submitted an announcement")
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
          {note && (
            <div className='add-announcement-component__form-note'>
              &bull; {note}
            </div>
          )}

          <input
            className='add-announcement-component__title'
            onChange={e => setTitle(e.target.value)}
            maxLength={25}
            placeholder='title'
          />
          <textarea
            className='add-announcement-component__message'
            onChange={e => setMessage(e.target.value)}
            maxLength={100}
            placeholder='message'
          />
          <CoolDownButton
            disabled={disabled}
            onClick={onSubmit}
            label='submit'
            className='add-announcement-component__submit'
            duration={30 * 1000}
          >
            Submit
          </CoolDownButton>
        </div>
      )}
    </div>
  )
}

export default AddAnnouncement

import React, { useState } from "react"
import "./index.scss"
import { ReactComponent as RightArrow } from "images/icons/rightArrow.svg"
import { subscribeMailchimp } from "utils/Api"

const SubmissionStates = {
  NotSubmitted: 0,
  Loading: 1,
  Submitted: 2,
  Errored: 3,
}

export const EmailSubscription: React.FC = () => {
  const [email, setEmail] = useState("")
  const [state, setState] = useState(SubmissionStates.NotSubmitted)
  const [message, setMessage] = useState("")

  const submitEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState(SubmissionStates.Loading)
    setMessage("Please wait while your message is being submitted...")

    subscribeMailchimp(email).then(res => {
      if (res.status === 200 || res.status === 201) {
        setState(SubmissionStates.Submitted)
        setMessage(res.data.message)
      } else {
        setState(SubmissionStates.Errored)
        setMessage(
          "Oh no! We've got an error— please try your request again & contact " +
            "us at dev@cruzhacks.com if this persists!"
        )
      }
    })
  }

  // hide form if email was submitted successfully
  const showForm = state !== SubmissionStates.Submitted

  return (
    <div className='emailSubscription-component'>
      {showForm && (
        <form onSubmit={ev => submitEmail(ev)}>
          <div className='emailSubscription-component__container'>
            <input
              className='emailSubscription-component__input'
              placeholder='enter email for updates...'
              type='email'
              onChange={e => setEmail(e.target.value)}
              disabled={state === SubmissionStates.Loading}
              required
            />
            <button
              className='emailSubscription-component__button'
              type='submit'
              disabled={state === SubmissionStates.Loading}
            >
              <RightArrow />
            </button>
          </div>
        </form>
      )}
      {message && (
        <div className='emailSubscription-component__feedbackMessage'>
          {message}
        </div>
      )}
    </div>
  )
}

export default EmailSubscription

import React, { useState } from "react"
import "./index.scss"
import { ReactComponent as ExitIcon } from "../../images/icons/circle-xmark-solid.svg"

interface PuzzleProps {
  children: React.ReactNode
  question: string
  answer: string
}

const link =
  "https://docs.google.com/forms/d/e/1FAIpQLSfyGGDipFozDbQrmDBIoGvCwLcn5Lec3GMNnCgsRWKp9Q4syA/viewform"

const PuzzleModal: React.FC<PuzzleProps> = ({
  children,
  question,
  answer,
}: PuzzleProps) => {
  const [response, setResponse] = useState("")
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isPuzzleHidden, setIsPuzzleHidden] = useState(true)
  const handleExit = () => setIsPuzzleHidden(true)
  const hiddenOrNot = isPuzzleHidden
    ? "puzzlemodal__container hidden"
    : "puzzlemodal__container displayed"

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResponse(event.target.value)
  }

  const handleSubmit = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      if (response.toLowerCase() === answer) {
        setSuccess(true)
        setErrorMessage("")
      } else {
        setErrorMessage("Sorry, that's incorrect. Guess again")
      }
    }
  }
  const SuccessMessage = (
    <div className='puzzlemodal__container--success'>
      That&apos;s correct!&#8239;
      <a href={link} target='_blank' rel='noreferrer'>
        Click here
      </a>
      &#8239;to earn your CruzCoins points!
    </div>
  )
  const questionaire = (
    <>
      {question}
      <div
        className='puzzlemodal__container--form'
        role='button'
        tabIndex={0}
        onKeyDown={handleSubmit}
      >
        <div className='puzzlemodal__error'>{errorMessage}</div>
        <input
          className={
            errorMessage ? "puzzlemodal__input--error" : "puzzlemodal__input"
          }
          type='text'
          onChange={handleChange}
        />
      </div>
    </>
  )
  return (
    <div>
      <div
        role='button'
        tabIndex={0}
        onClick={() => {
          setIsPuzzleHidden(false)
        }}
        onKeyDown={() => {
          setIsPuzzleHidden(false)
        }}
      >
        {children}
      </div>

      <div className={hiddenOrNot}>
        <button
          className='puzzlemodal__container--exit'
          type='button'
          onClick={handleExit}
        >
          <ExitIcon />
        </button>
        {success ? SuccessMessage : questionaire}
      </div>
    </div>
  )
}

export default PuzzleModal

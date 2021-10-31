import React from "react"
import "./index.scss"
import { ShortAnswerHandlerProps } from "Props/application/props"
import TextBox from "../../FormInputs/TextBox"

const ShortAnswerPage: React.FC<ShortAnswerHandlerProps> = ({
  parentState,
  setParentState,
}: ShortAnswerHandlerProps) => (
  <div className='short-answer-page'>
    Short Answer
    <TextBox
      className='short-answer-page__inputs--textfield'
      name='Why do you want to attend CruzHacks?'
      handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setParentState(prev => ({
          ...prev,
          whyCruzHacks: e.target.value,
        }))
      }
      fieldState={parentState.whyCruzHacks}
      errorMessage={parentState.whyCruzHacksErr}
      label='whyCruzHacks'
      maxLength={250}
    />
    <TextBox
      className='short-answer-page__inputs--textfield'
      name='What would you like to see at CruzHacks this year?'
      handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setParentState(prev => ({
          ...prev,
          newThisYear: e.target.value,
        }))
      }
      fieldState={parentState.newThisYear}
      errorMessage={parentState.newThisYearErr}
      label='newThisYear'
      maxLength={250}
    />
    <TextBox
      className='short-answer-page__inputs--textfield'
      name='Excluding all outside factors (money, technology development, etc), what is the grandest invention you would want to create or see?'
      handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setParentState(prev => ({
          ...prev,
          grandestInvention: e.target.value,
        }))
      }
      fieldState={parentState.grandestInvention}
      errorMessage={parentState.grandestInventionErr}
      label='grandest Invention'
      maxLength={250}
    />
  </div>
)

export default ShortAnswerPage

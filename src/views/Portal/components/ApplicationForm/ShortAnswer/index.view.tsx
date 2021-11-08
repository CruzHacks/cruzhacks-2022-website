import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import TextBox from "../../FormInputs/TextBox"

const ShortAnswerPage: React.FC = () => {
  const { shortAnswerFormData, setShortAnswerFormData } = useApplication()!
  return (
    <div className='short-answer-page-container'>
      <div className='short-answer-page-container__questions'>
        <div className='short-answer-page-container__title'>Short Answer</div>
        <div className='short-answer-page-container__fields'>
          <div className='short-answer-page-container__field'>
            <TextBox
              name='Why do you want to attend CruzHacks?'
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setShortAnswerFormData(prev => ({
                  ...prev,
                  whyCruzHacks: e.target.value,
                }))
              }
              fieldState={shortAnswerFormData.whyCruzHacks}
              errorMessage={shortAnswerFormData.whyCruzHacksErr}
              label='whyCruzHacks'
              className='__large'
              maxLength={250}
            />
          </div>
          <div className='short-answer-page-container__field'>
            <TextBox
              name='What would you like to see at CruzHacks this year?'
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setShortAnswerFormData(prev => ({
                  ...prev,
                  newThisYear: e.target.value,
                }))
              }
              fieldState={shortAnswerFormData.newThisYear}
              errorMessage={shortAnswerFormData.newThisYearErr}
              label='newThisYear'
              className='__large'
              maxLength={250}
            />
          </div>
          <div className='short-answer-page-container__field'>
            <TextBox
              name='Excluding all outside factors (money, technology development, etc), what is the grandest invention you would want to create or see?'
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setShortAnswerFormData(prev => ({
                  ...prev,
                  grandestInvention: e.target.value,
                }))
              }
              fieldState={shortAnswerFormData.grandestInvention}
              errorMessage={shortAnswerFormData.grandestInventionErr}
              label='grandest Invention'
              className='__large'
              maxLength={250}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShortAnswerPage

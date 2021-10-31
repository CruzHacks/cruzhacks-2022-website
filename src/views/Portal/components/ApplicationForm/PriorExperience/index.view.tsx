import React from "react"
import "./index.scss"
import { PriorExperienceHandlerProps } from "Props/application/props"
import TextBox from "../../FormInputs/TextBox"

const ExperiencePage: React.FC<PriorExperienceHandlerProps> = ({
  parentState,
  setParentState,
}: PriorExperienceHandlerProps) => (
  <div className='experience-page'>
    Prior Experience
    <TextBox
      className='short-answer-page__inputs--textfield'
      name='Do you have prior tech experience? If so, in what context (i.e., classes, internships, personal projects)?'
      handleChange={(e: any) =>
        setParentState(prev => ({
          ...prev,
          priorExperience: e.target.value,
        }))
      }
      fieldState={parentState.priorExperience}
      errorMessage={parentState.priorExperienceErr}
      label='priorExperience'
      maxLength={250}
    />
  </div>
)

export default ExperiencePage

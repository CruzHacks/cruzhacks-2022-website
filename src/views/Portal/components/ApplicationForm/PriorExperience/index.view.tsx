import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import TextBox from "../../FormInputs/TextBox"

const ExperiencePage: React.FC = () => {
  const { priorExperienceFormData, setPriorExperienceFormData } =
    useApplication()!
  return (
    <div className='experience-page'>
      Prior Experience
      <TextBox
        className='short-answer-page__inputs--textfield'
        name='Do you have prior tech experience? If so, in what context (i.e., classes, internships, personal projects)?'
        handleChange={(e: any) =>
          setPriorExperienceFormData(prev => ({
            ...prev,
            priorExperience: e.target.value,
          }))
        }
        fieldState={priorExperienceFormData.priorExperience}
        errorMessage={priorExperienceFormData.priorExperienceErr}
        label='priorExperience'
        maxLength={250}
      />
    </div>
  )
}

export default ExperiencePage

import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import TextBox from "../../FormInputs/TextBox"
import RadioForm from "../../FormInputs/Radio"
import TextField from "../../FormInputs/TextField"

const ExperiencePage: React.FC = () => {
  const { priorExperienceFormData, setPriorExperienceFormData } =
    useApplication()!
  return (
    <div className='experience-page'>
      <div className='experience-page__container'>
        Prior Experience
        <RadioForm
          question='Will this be your first time attending CruzHacks?'
          name='firstCruzHacks'
          inputs={[{ label: "Yes" }, { label: "No" }]}
          handleChange={(e: any) =>
            setPriorExperienceFormData(prev => ({
              ...prev,
              firstCruzHacks: e.target.value,
            }))
          }
          errorMessage={priorExperienceFormData.firstCruzHacksErr}
          value={priorExperienceFormData.firstCruzHacks}
        />
        <TextField
          // className='demographic-page__form-container__inputs--textfield'
          name='Have you attended any hackathons before? If so, how many?'
          handleChange={(e: any) =>
            setPriorExperienceFormData(prev => ({
              ...prev,
              hackathonCount: e.target.value,
            }))
          }
          fieldState={priorExperienceFormData.hackathonCount}
          errorMessage={priorExperienceFormData.hackathonCountErr}
          label='hackathonCount'
          maxLength={3}
        />
        <TextBox
          // className='short-answer-page__inputs--textfield'
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
    </div>
  )
}

export default ExperiencePage

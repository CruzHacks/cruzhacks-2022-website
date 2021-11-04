import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import TextBox from "../../FormInputs/TextBox"
<<<<<<< HEAD
=======
import RadioForm from "../../FormInputs/Radio"
import TextField from "../../FormInputs/TextField"
>>>>>>> 14f5af27284da2eb9b4e2ff2b88b74e94a4cf981

const ExperiencePage: React.FC = () => {
  const { priorExperienceFormData, setPriorExperienceFormData } =
    useApplication()!
  return (
    <div className='experience-page'>
      Prior Experience
<<<<<<< HEAD
=======
      <TextField
        className='demographic-page__form-container__inputs--textfield'
        name='hackathonCount'
        handleChange={(e: any) =>
          setPriorExperienceFormData(prev => ({
            ...prev,
            hackathonCount: e.target.value,
          }))
        }
        fieldState={priorExperienceFormData.hackathonCount}
        errorMessage={priorExperienceFormData.hackathonCountErr}
        label='age'
        maxLength={3}
      />
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
        checkedState={() => {}}
        errorMessage={priorExperienceFormData.hackathonCountErr}
      />
>>>>>>> 14f5af27284da2eb9b4e2ff2b88b74e94a4cf981
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

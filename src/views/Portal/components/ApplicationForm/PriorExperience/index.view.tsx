import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import TextBox from "../../FormInputs/TextBox"
import RadioForm from "../../FormInputs/Radio"
import NumberField from "../../FormInputs/NumberBox"

const ExperiencePage: React.FC = () => {
  const { priorExperienceFormData, setPriorExperienceFormData, setNewChanges } =
    useApplication()!
  return (
    <div className='experience-page-container'>
      <div className='experience-page-container__questions'>
        <div className='experience-page-container__title'>Prior Experience</div>
        <div className='experience-page-container__fields'>
          <div className='experience-page-container__field'>
            <RadioForm
              question='Will this be your first time attending CruzHacks?'
              name='firstCruzHacks'
              inputs={[{ label: "Yes" }, { label: "No" }]}
              handleChange={(e: any) => {
                setPriorExperienceFormData(prev => ({
                  ...prev,
                  firstCruzHacks: e.target.value,
                }))
                setNewChanges()
              }}
              errorMessage={priorExperienceFormData.firstCruzHacksErr}
              value={priorExperienceFormData.firstCruzHacks}
              className='radio-form-component__row'
            />
          </div>
          <div className='experience-page-container__field'>
            <NumberField
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
          </div>
          <div className='experience-page-container__field'>
            <TextBox
              name='Do you have prior tech experience? If so, in what context (i.e., classes, internships, personal projects)?'
              handleChange={(e: any) =>
                setPriorExperienceFormData(prev => ({
                  ...prev,
                  priorExperience: e.target.value,
                }))
              }
              className='__medium'
              fieldState={priorExperienceFormData.priorExperience}
              errorMessage={priorExperienceFormData.priorExperienceErr}
              label='priorExperience'
              maxLength={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperiencePage

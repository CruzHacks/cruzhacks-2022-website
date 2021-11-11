import React from "react"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import RadioForm from "../../FormInputs/Radio/index"
import "./index.scss"

const MLHPage: React.FC = () => {
  const { mlhFormData, setmlhFormData } = useApplication()!
  return (
    <div className='mlh-page-container'>
      <div className='mlh-page-container__questions'>
        <div className='mlh-page-container__title'>
          MLH Code of Conduct, Data Sharing, and Terms & Conditions
        </div>
        <div className='mlh-page__errors'>{mlhFormData.agreementErr}</div>
        <div className='mlh-page-container__code'>
          <div>
            As a Major League Hacking (MLH) member event, our attendees must
            read and agree to the MLH Code of Conduct.
          </div>
          <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>
            Code of Conduct
          </a>
        </div>
        <RadioForm
          question=''
          inputs={[
            {
              label:
                "I have read and agree to abide by the MLH Code of Conduct at CruzHacks.",
            },
          ]}
          name='conductAgree'
          handleChange={(e: any) =>
            setmlhFormData(prev => ({
              ...prev,
              conductAgree: e.target.value,
            }))
          }
          errorMessage=''
          value={mlhFormData.conductAgree}
        />
        <div className='mlh-page-container__TAC'>
          MLH Data Sharing and Terms & Conditions. I authorize CruzHacks to
          share my application/registration information with MLH for event
          administration, ranking, MLH administration, pre- and post-event
          informational e-mails, and occasional messages about hackathons
          in-line with the MLH Privacy Policy (
          <a href='https://mlh.io/privacy'>https://mlh.io/privacy</a>). I
          further agree to the terms of both the MLH Contest Terms and
          Conditions (
          <a href='https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions'>
            https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions
          </a>
          ) and the MLH Privacy Policy.
        </div>
        <RadioForm
          question=''
          inputs={[
            {
              label: "I have read and agree to the terms outlined above.",
            },
            {
              label: "I do not agree to the terms above.",
            },
          ]}
          name='tosAgree'
          handleChange={(e: any) =>
            setmlhFormData(prev => ({
              ...prev,
              tosAgree: e.target.value,
            }))
          }
          errorMessage=''
          value={mlhFormData.tosAgree}
        />
      </div>
    </div>
  )
}

export default MLHPage

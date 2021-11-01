import React, { useState } from "react"
import "./index.scss"
import { useAuth0 } from "@auth0/auth0-react"
import ApplicationPages from "Props/portal/page"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import {
  ContactProps,
  //   DemographicProps,
  //   ConnectedProps,
  //   MLHProps,
} from "Props/application/props"
import { generateContactProps } from "views/Portal/utils/PropBuilder"
import ConnectedForm from "./Connected/index.view"
import ContactForm from "./Contact/index.view"
import DemographicForm from "./Demographic/index.view"
import MLHForm from "./MLH/index.view"
import ExperienceForm from "./PriorExperience/index.view"
import ShortAnswerForm from "./ShortAnswer/index.view"

const ApplicationForm: React.FC = () => {
  const { user } = useAuth0()
  const { page, prevPage, nextPage } = useApplication()!
  const [contactFormData, setContactFormData] = useState<ContactProps>(
    generateContactProps("", "", "", user ? user.email : "")
  )
  // const [demographicFormData, setDemographicFormData] =
  //   useState<DemographicProps>()
  // const [connectedFormData, setConnectedFormData] = useState<ConnectedProps>()
  // const [mlhFormData, setmlhFormData] = useState<MLHProps>()

  const saveData = () => {}

  const submitData = () => {}

  const renderPage = (pageNumber: number) => {
    switch (pageNumber) {
      case ApplicationPages.Contact:
        return (
          <ContactForm
            parentState={contactFormData}
            setParentState={setContactFormData}
            validationErrors={generateContactProps("", "", "", "")}
          />
        )
      case ApplicationPages.Demographic:
        return <DemographicForm />
      case ApplicationPages.ShortAnswer:
        return <ShortAnswerForm />
      case ApplicationPages.PriorExperience:
        return <ExperienceForm />
      case ApplicationPages.Connected:
        return <ConnectedForm />
      case ApplicationPages.MLH:
        return MLHForm
      default:
        return (
          <ContactForm
            parentState={contactFormData}
            setParentState={setContactFormData}
            validationErrors={generateContactProps("", "", "", "")}
          />
        )
    }
  }

  return (
    <div className='application-form-component'>
      Application Form
      {renderPage(page)}
      <button type='button' onClick={saveData}>
        Save
      </button>
      <button type='button' onClick={prevPage}>
        Prev
      </button>
      <button type='button' onClick={nextPage}>
        Next
      </button>
      <button type='button' onClick={submitData}>
        Submit
      </button>
    </div>
  )
}

export default ApplicationForm

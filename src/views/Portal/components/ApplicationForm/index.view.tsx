import React from "react"
import "./index.scss"
import ApplicationPages from "Props/portal/page"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
// import {
// ContactProps,
// DemographicProps,
//   ShortAnswerProps,
//   PriorExperienceProps,
//   ConnectedProps,
//   MLHProps,
// } from "Props/application/props"
// import {
//  generateContactProps,
//  generateDemographicProps,
// } from "views/Portal/utils/PropBuilder"
import ConnectedForm from "./Connected/index.view"
import ContactForm from "./Contact/index.view"
import DemographicForm from "./Demographic/index.view"
import MLHForm from "./MLH/index.view"
import ExperienceForm from "./PriorExperience/index.view"
import ShortAnswerForm from "./ShortAnswer/index.view"
import {
  validateContactForm,
  validatedemographicForm,
  validateshortAnswerForm,
  validateConnectedForm,
  validatepriorExperienceForm,
} from "../../utils/validation"

const ApplicationForm: React.FC = () => {
  const {
    page,
    prevPage,
    nextPage,
    contactFormData,
    setContactFormData,
    demographicFormData,
    setDemographicFormData,
    shortAnswerFormData,
    setShortAnswerFormData,
    priorExperienceFormData,
    setPriorExperienceFormData,
    connectedFormData,
    setConnectedFormData,
  } = useApplication()!

  const viewNextPage = () => {
    if (page === ApplicationPages.Contact) {
      if (validateContactForm(contactFormData, setContactFormData)) {
        nextPage()
      }
    } else if (page === ApplicationPages.Demographic) {
      if (
        validatedemographicForm(demographicFormData, setDemographicFormData)
      ) {
        nextPage()
      }
    } else if (page === ApplicationPages.ShortAnswer) {
      if (
        validateshortAnswerForm(shortAnswerFormData, setShortAnswerFormData)
      ) {
        nextPage()
      }
    } else if (page === ApplicationPages.PriorExperience) {
      if (
        validatepriorExperienceForm(
          priorExperienceFormData,
          setPriorExperienceFormData
        )
      ) {
        nextPage()
      }
    } else if (page === ApplicationPages.Connected) {
      if (validateConnectedForm(connectedFormData, setConnectedFormData)) {
        nextPage()
      }
    }
  }

  const viewPrevPage = () => {
    prevPage()
  }

  const saveData = () => {}

  const submitData = () => {}

  const renderPage = (pageNumber: number) => {
    switch (pageNumber) {
      case ApplicationPages.Contact:
        return <ContactForm />
      case ApplicationPages.Demographic:
        return <DemographicForm />
      case ApplicationPages.ShortAnswer:
        return <ShortAnswerForm />
      case ApplicationPages.PriorExperience:
        return <ExperienceForm />
      case ApplicationPages.Connected:
        return <ConnectedForm />
      case ApplicationPages.MLH:
        return <MLHForm />
      default:
        return <ContactForm />
    }
  }

  return (
    <div className='application-form-component'>
      Application Form
      {renderPage(page)}
      <button type='button' onClick={saveData}>
        Save
      </button>
      <button type='button' onClick={viewPrevPage}>
        Prev
      </button>
      <button type='button' onClick={viewNextPage}>
        Next
      </button>
      <button type='button' onClick={submitData}>
        Submit
      </button>
    </div>
  )
}

export default ApplicationForm

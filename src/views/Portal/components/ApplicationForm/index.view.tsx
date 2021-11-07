import React from "react"
import "./index.scss"
import ApplicationPages from "Props/portal/page"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import ProgressBar from "components/ProgressBar/ProgressBar"
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
    saveData,
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
      if (validateContactForm(contactFormData, setContactFormData, true)) {
        nextPage()
      }
    } else if (page === ApplicationPages.Demographic) {
      if (
        validatedemographicForm(
          demographicFormData,
          setDemographicFormData,
          true
        )
      ) {
        nextPage()
      }
    } else if (page === ApplicationPages.ShortAnswer) {
      if (
        validateshortAnswerForm(
          shortAnswerFormData,
          setShortAnswerFormData,
          true
        )
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
    nextPage()
  }

  const viewPrevPage = () => {
    prevPage()
  }

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
      <div className='application-form-component__progress'>
        <div className='application-form-component__progress-text'>
          Section {page} / {ApplicationPages.MLH}
        </div>
        <ProgressBar
          current={page - 1}
          limit={ApplicationPages.MLH}
          className='__header'
        />
      </div>
      <div className='application-form-component__box'>
        {renderPage(page)}
        <div className='application-form-component__buttons'>
          <button
            className='application-form-component__button'
            type='button'
            onClick={saveData}
          >
            Save
          </button>
          <button
            className='application-form-component__button'
            type='button'
            onClick={viewPrevPage}
          >
            {"< Prev"}
          </button>
          {page !== ApplicationPages.MLH && (
            <button
              className='application-form-component__button'
              type='button'
              onClick={viewNextPage}
            >
              {"Next >"}
            </button>
          )}
          {page === ApplicationPages.MLH && (
            <button
              className='application-form-component__button'
              type='button'
              onClick={submitData}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm

import React from "react"
import "./index.scss"
import ApplicationPages from "Props/portal/page"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import ConnectedForm from "./Connected/index.view"
import ContactForm from "./Contact/index.view"
import DemographicForm from "./Demographic/index.view"
import MLHForm from "./MLH/index.view"
import ExperienceForm from "./PriorExperience/index.view"
import ShortAnswerForm from "./ShortAnswer/index.view"

const ApplicationForm: React.FC = () => {
  const { page, prevPage, nextPage } = useApplication()!

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
      <div className='application-form-component__box'>
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
    </div>
  )
}

export default ApplicationForm

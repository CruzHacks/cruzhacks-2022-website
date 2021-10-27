import React from "react"
import "./index.scss"
import { ApplicationPagesProps } from "Props/props"
import ApplicationPages from "Props/portal/page"
import ConnectedForm from "./Connected/index.view"
import ContactForm from "./Contact/index.view"
import DemographicForm from "./Demographic/index.view"
import MLHForm from "./MLH/index.view"
import ExperienceForm from "./PriorExperience/index.view"
import ShortAnswerForm from "./ShortAnswer/index.view"
// import {
//   ContactProps,
//   DemographicProps,
//   ShortAnswerProps,
//   PriorExperienceProps,
//   ConnectedProps,
//   MLHProps,
// } from "Props/application/props"

const ApplicationForm: React.FC<ApplicationPagesProps> = ({
  page,
  setPage,
}: ApplicationPagesProps) => {
  // const [contactFormData, setContactFormData] = useState<ContactProps>()
  // const [demographicFormData, setDemographicFormData] =
  //   useState<DemographicProps>()
  // const [shortAnswerFormData, setShortAnswerFormData] =
  //   useState<ShortAnswerProps>()
  // const [priorExperienceFormData, setPriorExperienceFormData] =
  //   useState<PriorExperienceProps>()
  // const [connectedFormData, setConnectedFormData] = useState<ConnectedProps>()
  // const [mlhFormData, setmlhFormData] = useState<MLHProps>()

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  const nextPage = () => {
    if (page < 6) {
      setPage(page + 1)
    }
  }

  const saveData = () => {}

  const submitData = () => {}

  const renderPage = (pageNumber: number) => {
    switch (pageNumber) {
      case ApplicationPages.Contact:
        return ContactForm
      case ApplicationPages.Demographic:
        return DemographicForm
      case ApplicationPages.ShortAnswer:
        return ShortAnswerForm
      case ApplicationPages.PriorExperience:
        return ExperienceForm
      case ApplicationPages.Connected:
        return ConnectedForm
      case ApplicationPages.MLH:
        return MLHForm
      default:
        setPage(ApplicationPages.Contact)
        return ContactForm
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

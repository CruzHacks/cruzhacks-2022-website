import React from "react"
import "./index.scss"
import ApplicationPages from "Props/portal/page"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
<<<<<<< HEAD
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
=======
>>>>>>> 14f5af27284da2eb9b4e2ff2b88b74e94a4cf981
import ConnectedForm from "./Connected/index.view"
import ContactForm from "./Contact/index.view"
import DemographicForm from "./Demographic/index.view"
import MLHForm from "./MLH/index.view"
import ExperienceForm from "./PriorExperience/index.view"
import ShortAnswerForm from "./ShortAnswer/index.view"

const ApplicationForm: React.FC = () => {
  const { page, prevPage, nextPage } = useApplication()!
<<<<<<< HEAD
  // const [contactFormData, setContactFormData] = useState<ContactProps>(
  //  generateContactProps("", "", "", user ? user.email : "")
  // )
  // const [demographicFormData, setDemographicFormData] =
  //  useState<DemographicProps>(generateDemographicProps())
  // const [shortAnswerFormData, setShortAnswerFormData] =
  //   useState<ShortAnswerProps>()
  // const [priorExperienceFormData, setPriorExperienceFormData] =
  //   useState<PriorExperienceProps>()
  // const [connectedFormData, setConnectedFormData] = useState<ConnectedProps>()
  // const [mlhFormData, setmlhFormData] = useState<MLHProps>()
=======
>>>>>>> 14f5af27284da2eb9b4e2ff2b88b74e94a4cf981

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

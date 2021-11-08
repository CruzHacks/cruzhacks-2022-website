import React, { useEffect, useState } from "react"
import "./index.scss"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"
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

  const { getAccessTokenSilently } = useAuth0()
  const [token, setToken] = useState("no token")
  const [successOnSubmit, setSubmitStatus] = useState("none")

  useEffect(() => {
    getAccessTokenSilently()
      .then(ac => setToken(ac))
      .catch()
  }, [])

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

  const saveData = () => {}

  const submitData = async () => {
    try {
      const bodyData = new FormData()
      bodyData.append("fname", contactFormData.fname)
      bodyData.append("lname", contactFormData.lname)
      bodyData.append("email", contactFormData.email || "none")
      bodyData.append("phone", contactFormData.phone)
      bodyData.append("age", demographicFormData.age)
      bodyData.append("pronounCount", "1")
      for (let i = 0; i < demographicFormData.pronouns.length; i += 1) {
        bodyData.append("pronouns[0-N-1]", demographicFormData.pronouns[i])
      }
      bodyData.append("sexualityCount", "1")
      for (let i = 0; i < demographicFormData.sexuality.length; i += 1) {
        bodyData.append("sexuality[0-N-1]", demographicFormData.sexuality[i])
      }
      bodyData.append("school", demographicFormData.school)
      bodyData.append(
        "collegeAffiliation",
        demographicFormData.collegeAffiliation
      )
      bodyData.append("eventLocation", demographicFormData.eventLocation)
      bodyData.append("major", demographicFormData.major)
      bodyData.append("currentStanding", demographicFormData.currentStanding)
      bodyData.append("country", demographicFormData.country)
      bodyData.append("whyCruzHacks", shortAnswerFormData.whyCruzHacks)
      bodyData.append("newThisYear", priorExperienceFormData.firstCruzHacks)
      bodyData.append(
        "grandestInvention",
        shortAnswerFormData.grandestInvention
      )
      bodyData.append("firstCruzHack", priorExperienceFormData.firstCruzHacks)
      bodyData.append("hackathonCount", priorExperienceFormData.hackathonCount)
      bodyData.append(
        "priorExperience",
        priorExperienceFormData.priorExperience
      )
      bodyData.append("linkedin", connectedFormData.linkedin)
      bodyData.append("github", connectedFormData.github)
      bodyData.append("cruzCoins", connectedFormData.cruzCoins)
      bodyData.append("anythingElse", connectedFormData.anythingElse)

      const res = await axios({
        method: "post",
        url: "http://127.0.0.1:5001/cruzhacks-2022-development/us-central1/application/submit",
        data: bodyData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(res)
      if (res.status === 201) {
        setSubmitStatus("submitted")
      }
    } catch (res) {
      // pass
      setSubmitStatus("error submitting")
    }
  }

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
        <div>{successOnSubmit === "submitted" ? "submitted" : ""}</div>
        <div>
          {successOnSubmit === "error submitting" ? "Could Not Submit" : ""}
        </div>
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

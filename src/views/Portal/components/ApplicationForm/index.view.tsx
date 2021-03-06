import React, { useEffect, useState } from "react"
import "./index.scss"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import ApplicationPages from "Props/portal/page"
import AppStatus from "Props/portal/application"
import ProgressBar from "components/ProgressBar/ProgressBar"
import { removeCache } from "utils/Storage"
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
    setPage,
    prevPage,
    nextPage,
    savePage,
    newChangesRef,
    submitting,
    setSubmitting,
    setAppStatus,
    accessToken,
    setToken,
    progress,
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
    mlhFormData,
  } = useApplication()!

  const [successOnSubmit, setSubmitStatus] = useState("none")
  const [serverErrors, setServerErrors] = useState<Array<string>>([])
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
  }

  const viewPrevPage = () => {
    prevPage()
  }

  useEffect(() => {
    // notify user if they are trying to leave the form after working on the app
    const confirmLeave = (ev: BeforeUnloadEvent) => {
      if (newChangesRef.current) {
        ev.preventDefault()

        // eslint-disable-next-line no-param-reassign
        ev.returnValue = "Are you sure?"
      }
    }

    window.addEventListener("beforeunload", confirmLeave)
    return () => {
      window.removeEventListener("beforeunload", confirmLeave)
    }
  })

  const { user, getAccessTokenSilently } = useAuth0()
  const submitData = async () => {
    try {
      // save the progress first
      savePage()
    } catch (err: any) {
      // but don't let errors prevent us from submitting.
    }

    try {
      setSubmitting(true)
      const bodyData = new FormData()
      bodyData.append("fname", contactFormData.fname)
      bodyData.append("lname", contactFormData.lname)
      bodyData.append("email", user?.email ? user.email : "")
      bodyData.append("phone", contactFormData.phone)
      bodyData.append("age", demographicFormData.age)
      bodyData.append(
        "pronounCount",
        demographicFormData.pronouns.length.toString()
      )
      for (let i = 0; i < demographicFormData.pronouns.length; i += 1) {
        bodyData.append(`pronouns[${i}]`, demographicFormData.pronouns[i])
      }
      bodyData.append(
        "sexualityCount",
        demographicFormData.sexuality.length.toString()
      )
      for (let i = 0; i < demographicFormData.sexuality.length; i += 1) {
        bodyData.append(`sexuality[${i}]`, demographicFormData.sexuality[i])
      }
      bodyData.append("race", demographicFormData.race)
      bodyData.append("school", demographicFormData.school)
      bodyData.append(
        "collegeAffiliation",
        demographicFormData.collegeAffiliation
      )
      bodyData.append("eventLocation", demographicFormData.eventLocation)
      bodyData.append("major", demographicFormData.major)
      bodyData.append("currentStanding", demographicFormData.currentStanding)
      bodyData.append("graduation", demographicFormData.graduation)
      bodyData.append("country", demographicFormData.country)
      bodyData.append("whyCruzHacks", shortAnswerFormData.whyCruzHacks)
      bodyData.append("newThisYear", shortAnswerFormData.newThisYear)
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
      bodyData.append("file", connectedFormData.resume)
      bodyData.append("linkedin", connectedFormData.linkedin)
      bodyData.append("github", connectedFormData.github)
      bodyData.append("cruzCoins", connectedFormData.cruzCoins)
      bodyData.append("anythingElse", connectedFormData.anythingElse)
      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_ENDPOINT_URL}/application/submit`,
        data: bodyData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (res.status === 201) {
        setSubmitStatus("submitted")
        setPage(0)
        setAppStatus(AppStatus.Pending)
        setSubmitting(false)

        // delete the saved application in session storage
        removeCache("application", user?.email)
      }
    } catch (err: any) {
      if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.errors
      ) {
        setServerErrors(err.response.data.errors)
      } else {
        setServerErrors([])
      }
      if (err && err.response && err.response.status === 401) {
        getAccessTokenSilently()
          .then(data => setToken(data))
          .catch(() => setToken(""))
      }
      setSubmitStatus("error submitting")
      setSubmitting(false)
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
          current={progress}
          limit={ApplicationPages.MLH}
          className='__header'
        />
      </div>
      <div className='application-form-component__box'>
        {renderPage(page)}
        <div className='application-form-component__response'>
          {successOnSubmit === "submitted" ? "submitted" : ""}
        </div>
        <div className='application-form-component__response-err'>
          {successOnSubmit === "error submitting" && serverErrors.length === 0
            ? "CruzHacks Cloud had an error processing your application. There may be a high bandwidth of users at this moment or your session has expired. Please try to refresh your browser. Our engineers have been alerted! Try again soon!"
            : ""}
        </div>

        {submitting && (
          <div className='application-form-component__response'>
            Submitting...
          </div>
        )}
        {successOnSubmit === "error submitting" && serverErrors.length > 0 && (
          <div className='application-form-component__response-err'>
            Server Errors:
          </div>
        )}

        {successOnSubmit === "error submitting" &&
          serverErrors.length > 0 &&
          serverErrors.map((error: string) => (
            <div
              className='application-form-component__response-err'
              key={error}
            >
              {error}
            </div>
          ))}

        <div className='application-form-component__buttons'>
          <button
            className='application-form-component__button'
            type='button'
            onClick={viewPrevPage}
            disabled={submitting}
          >
            {"< Prev"}
          </button>
          {page !== ApplicationPages.MLH && (
            <button
              className='application-form-component__button'
              type='button'
              onClick={viewNextPage}
              disabled={submitting}
            >
              {"Next >"}
            </button>
          )}
          {page === ApplicationPages.MLH && (
            <button
              className='application-form-component__button'
              type='button'
              onClick={submitData}
              disabled={
                submitting ||
                !(
                  mlhFormData.conductAgree ===
                    "I have read and agree to abide by the MLH Code of Conduct at CruzHacks." &&
                  mlhFormData.tosAgree ===
                    "I have read and agree to the terms outlined above." &&
                  mlhFormData.communicationAgree ===
                    "I have read and agree to the terms outlined above."
                )
              }
            >
              {submitting ? "Loading..." : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm

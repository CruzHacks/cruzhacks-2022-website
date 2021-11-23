import React, {
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { store, retrieve } from "utils/Storage"
import { checkApplication } from "utils/Api"
import {
  ContactProps,
  DemographicProps,
  ShortAnswerProps,
  PriorExperienceProps,
  ConnectedProps,
  MLHProps,
  SavedApplication,
} from "Props/application/props"
import {
  generateContactProps,
  generateDemographicProps,
  generateShortAnswerProps,
  generatePriorExperienceProps,
  generateConnectedProps,
  generateMLHProps,
} from "views/Portal/utils/PropBuilder"
import AppStatus from "Props/portal/application"
import ApplicationForm from "views/Portal/components/ApplicationForm/index.view"
import ApplicationStatus from "views/Portal/components/ApplicationStatus/index.view"
import ApplicationPages from "../../Props/portal/page"

interface ApplicationContextProps {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  appStatus: number
  setAppStatus: Dispatch<SetStateAction<number>>
  accessToken: string
  nextPage: any
  prevPage: any
  savePage: any

  submitting: boolean
  setSubmitting: Dispatch<SetStateAction<boolean>>

  progress: number
  contactFormData: ContactProps
  setContactFormData: Dispatch<SetStateAction<ContactProps>>

  demographicFormData: DemographicProps
  setDemographicFormData: Dispatch<SetStateAction<DemographicProps>>

  shortAnswerFormData: ShortAnswerProps
  setShortAnswerFormData: Dispatch<SetStateAction<ShortAnswerProps>>

  priorExperienceFormData: PriorExperienceProps
  setPriorExperienceFormData: Dispatch<SetStateAction<PriorExperienceProps>>

  connectedFormData: ConnectedProps
  setConnectedFormData: Dispatch<SetStateAction<ConnectedProps>>

  mlhFormData: MLHProps
  setmlhFormData: Dispatch<SetStateAction<MLHProps>>
}

export const ApplicationContext =
  React.createContext<ApplicationContextProps | null>(null)
export const useApplication = () => useContext(ApplicationContext)
export const ApplicationProvider: React.FC = () => {
  const [token, setToken] = useState<string>("")
  const [page, setPage] = useState<number>(0)
  const [status, setStatus] = useState<number>(0)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const { user, getAccessTokenSilently } = useAuth0()

  const savedFormData: SavedApplication = retrieve(
    "application",
    {},
    user?.email
  )

  const [progress, setProgress] = useState<number>(savedFormData.progress || 0)

  const [contactFormData, setContactFormData] = useState<ContactProps>(
    generateContactProps(user ? user.email : "", savedFormData.contact)
  )
  const [demographicFormData, setDemographicFormData] =
    useState<DemographicProps>(
      generateDemographicProps(savedFormData.demographic)
    )
  const [shortAnswerFormData, setShortAnswerFormData] =
    useState<ShortAnswerProps>(
      generateShortAnswerProps(savedFormData.shortAnswer)
    )
  const [priorExperienceFormData, setPriorExperienceFormData] =
    useState<PriorExperienceProps>(
      generatePriorExperienceProps(savedFormData.priorExperience)
    )
  const [connectedFormData, setConnectedFormData] = useState<ConnectedProps>(
    generateConnectedProps(savedFormData.connected)
  )
  const [mlhFormData, setmlhFormData] = useState<MLHProps>(
    generateMLHProps(savedFormData.MLH)
  )

  useEffect(() => {
    try {
      const cachedStatus = retrieve("applicationStatus", undefined)
      if (cachedStatus !== undefined) {
        setStatus(Number.parseInt(cachedStatus, 10))
        return
      }
    } catch (err) {
      // Something went wrong with the cache... fetch from API again.
    }

    getAccessTokenSilently()
      .then(accessToken => {
        setToken(accessToken)
        checkApplication(accessToken).then(res => {
          switch ((res.data.status || "").toLowerCase()) {
            case "no document":
              // check if the application really doesn't exist, or if we failed to fetch it
              if (res.statusCode !== 200) {
                setStatus(AppStatus.Errored)
                break
              }

              if (savedFormData.progress) {
                setStatus(AppStatus.InProgress)
                break
              }

              setStatus(AppStatus.NotFound)
              break
            case "accepted":
              setStatus(AppStatus.Accepted)
              store(
                "applicationStatus",
                AppStatus.Accepted,
                12 * 60 * 60, // store for 12hrs
                user?.email
              )
              break
            case "rejected":
              setStatus(AppStatus.Rejected)
              store(
                "applicationStatus",
                AppStatus.Rejected,
                12 * 60 * 60, // store for 12hrs
                user?.email
              )
              break
            case "pending":
              setStatus(AppStatus.Pending)
              store(
                "applicationStatus",
                AppStatus.Pending,
                12 * 60 * 60, // store for 12hrs
                user?.email
              )
              break
            default:
              setStatus(AppStatus.Errored)
              break
          }
        })
      })
      .catch(() => setStatus(AppStatus.Errored))
  }, [])

  const savePage = () => {
    const formData: SavedApplication = retrieve("application", {}, user?.email)

    if (!formData.progress || page > formData.progress) {
      formData.progress = page
      setProgress(page)
    }

    if (page === ApplicationPages.Contact) {
      const { fname, lname, phone, email } = contactFormData
      formData.contact = { fname, lname, phone, email }
    } else if (page === ApplicationPages.Demographic) {
      const {
        age,
        pronouns,
        race,
        sexuality,
        school,
        collegeAffiliation,
        eventLocation,
        major,
        currentStanding,
        country,
      } = demographicFormData
      formData.demographic = {
        age,
        pronouns,
        race,
        sexuality,
        school,
        collegeAffiliation,
        eventLocation,
        major,
        currentStanding,
        country,
      }
    } else if (page === ApplicationPages.ShortAnswer) {
      const { whyCruzHacks, newThisYear, grandestInvention } =
        shortAnswerFormData
      formData.shortAnswer = { whyCruzHacks, newThisYear, grandestInvention }
    } else if (page === ApplicationPages.PriorExperience) {
      const { firstCruzHacks, hackathonCount, priorExperience } =
        priorExperienceFormData
      formData.priorExperience = {
        firstCruzHacks,
        hackathonCount,
        priorExperience,
      }
    } else if (page === ApplicationPages.Connected) {
      const { linkedin, github, cruzCoins, anythingElse } = connectedFormData
      formData.connected = { linkedin, github, cruzCoins, anythingElse }
    }

    store("application", formData, 60 * 60 * 24 * 30, user?.email)
  }

  const nextPage = () => {
    if (page < 6) {
      savePage()
      setPage(page + 1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <ApplicationContext.Provider
      value={{
        page,
        setPage,
        appStatus: status,
        setAppStatus: setStatus,
        accessToken: token,
        nextPage,
        prevPage,
        savePage,
        submitting,
        setSubmitting,
        progress,
        contactFormData,
        demographicFormData,
        shortAnswerFormData,
        priorExperienceFormData,
        connectedFormData,
        mlhFormData,
        setContactFormData,
        setDemographicFormData,
        setShortAnswerFormData,
        setPriorExperienceFormData,
        setConnectedFormData,
        setmlhFormData,
      }}
    >
      {page === 0 && <ApplicationStatus />}
      {page !== 0 && <ApplicationForm />}
    </ApplicationContext.Provider>
  )
}

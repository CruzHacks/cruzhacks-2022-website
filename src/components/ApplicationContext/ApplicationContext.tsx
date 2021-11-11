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

  submitting: boolean
  setSubmitting: Dispatch<SetStateAction<boolean>>

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

  // const [progress, setProgress] = useState<number>(
  //   Number.parseInt(retrieve("app-progress", 0, user?.email), 10)
  // )

  const [contactFormData, setContactFormData] = useState<ContactProps>(
    generateContactProps(
      user ? user.email : "",
      retrieve("app-contact", {}, user?.email)
    )
  )
  const [demographicFormData, setDemographicFormData] =
    useState<DemographicProps>(
      generateDemographicProps(retrieve("app-demographic", {}, user?.email))
    )
  const [shortAnswerFormData, setShortAnswerFormData] =
    useState<ShortAnswerProps>(
      generateShortAnswerProps(retrieve("app-shortAnswer", {}, user?.email))
    )
  const [priorExperienceFormData, setPriorExperienceFormData] =
    useState<PriorExperienceProps>(
      generatePriorExperienceProps(
        retrieve("app-priorExperience", {}, user?.email)
      )
    )
  const [connectedFormData, setConnectedFormData] = useState<ConnectedProps>(
    generateConnectedProps(retrieve("app-connected", {}, user?.email))
  )
  const [mlhFormData, setmlhFormData] = useState<MLHProps>(
    generateMLHProps(retrieve("app-MLH", {}, user?.email))
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
              if (res.statusCode === 200) {
                setStatus(AppStatus.NotFound)
                // if (progress) setStatus(AppStatus.InProgress)
              } else {
                setStatus(AppStatus.Errored)
              }
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
    if (page === ApplicationPages.Contact) {
      const { fname, lname, phone, email } = contactFormData
      store(
        "app-contact",
        { fname, lname, phone, email },
        undefined,
        user?.email
      )
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
      store(
        "app-demographic",
        {
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
        },
        undefined,
        user?.email
      )
    } else if (page === ApplicationPages.ShortAnswer) {
      const { whyCruzHacks, newThisYear, grandestInvention } =
        shortAnswerFormData
      store(
        "app-shortAnswer",
        { whyCruzHacks, newThisYear, grandestInvention },
        undefined,
        user?.email
      )
    } else if (page === ApplicationPages.PriorExperience) {
      const { firstCruzHacks, hackathonCount, priorExperience } =
        priorExperienceFormData
      store(
        "app-priorExperience",
        { firstCruzHacks, hackathonCount, priorExperience },
        undefined,
        user?.email
      )
    } else if (page === ApplicationPages.Connected) {
      const { linkedin, github, cruzCoins, anythingElse } = connectedFormData
      store(
        "app-connected",
        { linkedin, github, cruzCoins, anythingElse },
        undefined,
        user?.email
      )
    }
  }

  const nextPage = () => {
    if (page < 6) {
      savePage()
      setPage(page + 1)

      // if (page + 1 > progress) {
      //   setProgress(page + 1)
      //   store("app-progress", progress, undefined, user?.email)
      // }
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
        submitting,
        setSubmitting,
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

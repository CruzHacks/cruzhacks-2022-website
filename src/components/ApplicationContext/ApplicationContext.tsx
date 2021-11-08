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

interface ApplicationContextProps {
  page: number
  appStatus: number
  accessToken: string
  nextPage: any
  prevPage: any
  saveData: () => void

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
  const { user, getAccessTokenSilently } = useAuth0()

  const savedFormData: SavedApplication = retrieve(
    "application",
    {},
    user?.email
  )

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
              if (res.statusCode === 200) {
                setStatus(AppStatus.NotFound)
              } else {
                setStatus(AppStatus.Errored)
              }
              break
            case "accepted":
              setStatus(AppStatus.Accepted)
              store("applicationStatus", AppStatus.Accepted, 12 * 60 * 60) //  store for 12hrs
              break
            case "rejected":
              setStatus(AppStatus.Rejected)
              store("applicationStatus", AppStatus.Rejected, 12 * 60 * 60) // store for 12hrs
              break
            case "pending":
              setStatus(AppStatus.Pending)
              store("applicationStatus", AppStatus.Pending, 12 * 60 * 60) // store for 12hrs
              break
            default:
              setStatus(AppStatus.Errored)
              break
          }
        })
      })
      .catch(() => setStatus(AppStatus.Errored))
  }, [])

  const nextPage = () => {
    if (page < 6) {
      setPage(page + 1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const saveData = () => {
    const { fname, lname, phone, email } = contactFormData
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
    const { whyCruzHacks, newThisYear, grandestInvention } = shortAnswerFormData
    const { firstCruzHacks, hackathonCount, priorExperience } =
      priorExperienceFormData
    const { linkedin, github, cruzCoins, anythingElse } = connectedFormData
    const { conductAgree, tosAgree } = mlhFormData

    const data: SavedApplication = {
      contact: { fname, lname, phone, email },
      demographic: {
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
      shortAnswer: { whyCruzHacks, newThisYear, grandestInvention },
      priorExperience: { firstCruzHacks, hackathonCount, priorExperience },
      connected: { linkedin, github, cruzCoins, anythingElse },
      MLH: { conductAgree, tosAgree },
    }
    store("application", data, 60 * 60 * 24 * 30, user?.email)
  }

  return (
    <ApplicationContext.Provider
      value={{
        page,
        appStatus: status,
        accessToken: token,
        nextPage,
        prevPage,
        saveData,
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

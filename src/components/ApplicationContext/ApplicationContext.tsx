import React, { useState, useEffect, useContext } from "react"
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
  generateShortAnswerProps,
  generatePriorExperienceProps,
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
  contactFormData: ContactProps
  setContactFormData: any

  demographicFormData: any
  setDemographicFormData: any

  shortAnswerFormData: ShortAnswerProps
  setShortAnswerFormData: any

  priorExperienceFormData: PriorExperienceProps
  setPriorExperienceFormData: any

  connectedFormData: any
  setConnectedFormData: any

  mlhFormData: any
  setmlhFormData: any
}

export const ApplicationContext =
  React.createContext<ApplicationContextProps | null>(null)
export const useApplication = () => useContext(ApplicationContext)
export const ApplicationProvider: React.FC = () => {
  const [token, setToken] = useState<string>("")
  const [page, setPage] = useState<number>(0)
  const [status, setStatus] = useState<number>(0)
  const { user, getAccessTokenSilently } = useAuth0()

  const [contactFormData, setContactFormData] = useState<ContactProps>(
    generateContactProps("", "", "", user ? user.email : "")
  )
  const [demographicFormData, setDemographicFormData] =
    useState<DemographicProps>()
  const [shortAnswerFormData, setShortAnswerFormData] =
    useState<ShortAnswerProps>(generateShortAnswerProps())
  const [priorExperienceFormData, setPriorExperienceFormData] =
    useState<PriorExperienceProps>(generatePriorExperienceProps())
  const [connectedFormData, setConnectedFormData] = useState<ConnectedProps>()
  const [mlhFormData, setmlhFormData] = useState<MLHProps>()
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
  // eslint-disable-next-line

  const nextPage = () => {
    if (page < 6) {
      setPage(page + 1)
    }
  }

  const prevPage = () => {
    if (page > 2) {
      setPage(page - 1)
    }
  }

  return (
    <ApplicationContext.Provider
      value={{
        page,
        appStatus: status,
        accessToken: token,
        nextPage,
        prevPage,
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

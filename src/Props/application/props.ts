import { Dispatch, SetStateAction } from "react"

export interface ContactProps {
  fname: string
  lname: string
  phone: string
  email: string | undefined
  fnameErr: string
  lnameErr: string
  phoneErr: string
<<<<<<< HEAD
  emailErr: string 
=======
  emailErr: string
>>>>>>> 14f5af27284da2eb9b4e2ff2b88b74e94a4cf981
}

export interface DemographicProps {
    age: string
    pronounsCount: number
    pronouns: string[]
    race: string
    sexualityCount: number
    sexuality: string[]
    school: string
    collegeAffiliation: string
    eventLocation: string
    major: string
    currentStanding: string
    country: string
<<<<<<< HEAD
=======

>>>>>>> 14f5af27284da2eb9b4e2ff2b88b74e94a4cf981
    ageErr: string
    pronounsErr: string
    raceErr: string
    sexualityErr: string
    schoolErr: string
    collegeAffiliationErr: string
    eventLocationErr: string
    majorErr: string
    currentStandingErr: string
    countryErr: string
}

export interface ShortAnswerProps {
  whyCruzHacks: string
  newThisYear: string
  grandestInvention: string
  whyCruzHacksErr: string
  newThisYearErr: string
  grandestInventionErr: string
}

export interface PriorExperienceProps {
  firstCruzHacks: boolean
<<<<<<< HEAD
  hackathonCount: number
=======
  hackathonCount: string 
>>>>>>> 14f5af27284da2eb9b4e2ff2b88b74e94a4cf981
  priorExperience: string
  firstCruzHacksErr: string
  hackathonCountErr: string
  priorExperienceErr: string
}

export interface ConnectedProps {}

export interface MLHProps {}

export interface ContactHandlers {
  parentState: ContactProps
  setParentState: any
  validationErrors: ContactProps
}

export interface DemographicHandlers {
  parentState: DemographicProps
  setParentState:  Dispatch<SetStateAction<DemographicProps>>
  validationErrors: DemographicProps
}

export interface ShortAnswerHandlerProps {
  parentState: ShortAnswerProps
  setParentState: Dispatch<SetStateAction<ShortAnswerProps>>
}

export interface PriorExperienceHandlerProps {
    parentState: PriorExperienceProps
    setParentState: Dispatch<SetStateAction<PriorExperienceProps>>
}
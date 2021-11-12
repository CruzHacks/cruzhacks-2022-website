export interface SerializableContactProps {
  fname: string
  lname: string
  phone: string
  email: string | undefined
}

export interface ContactProps extends SerializableContactProps {
  fnameErr: string
  lnameErr: string
  phoneErr: string
  emailErr: string
}

export interface SerializableDemographicProps {
  age: string
  pronouns: string[]
  race: string
  sexuality: string[]
  school: string
  collegeAffiliation: string
  eventLocation: string
  major: string
  currentStanding: string
  country: string
}

export interface DemographicProps extends SerializableDemographicProps {
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

export interface SerializableShortAnswerProps {
  whyCruzHacks: string
  newThisYear: string
  grandestInvention: string
}

export interface ShortAnswerProps extends SerializableShortAnswerProps {
  whyCruzHacksErr: string
  newThisYearErr: string
  grandestInventionErr: string
}

export interface SerializablePriorExperienceProps {
  firstCruzHacks: string
  hackathonCount: string
  priorExperience: string
}

export interface PriorExperienceProps extends SerializablePriorExperienceProps {
  firstCruzHacksErr: string
  hackathonCountErr: string
  priorExperienceErr: string
}

export interface SerializableConnectedProps {
  linkedin: string
  github: string
  cruzCoins: string
  anythingElse: string
}

export interface ConnectedProps extends SerializableConnectedProps {
  resume: any

  resumeErr: string
  linkedinErr: string
  githubErr: string
  cruzCoinsErr: string
  anythingElseErr: string
}

export interface SerializableMLHProps {
  conductAgree: string
  tosAgree: string
}

export interface MLHProps extends SerializableMLHProps {
  agreementErr: string
}

export interface SavedApplication {
  progress: number
  contact: SerializableContactProps
  demographic: SerializableDemographicProps
  shortAnswer: SerializableShortAnswerProps
  priorExperience: SerializablePriorExperienceProps
  connected: SerializableConnectedProps
  MLH: SerializableMLHProps
}

export interface ContactProps {
  fname: string
  lname: string
  phone: string
  email: string | undefined
  fnameErr: string
  lnameErr: string
  phoneErr: string
  emailErr: string
}

export interface DemographicProps {
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
  firstCruzHacks: string
  hackathonCount: string 
  priorExperience: string
  firstCruzHacksErr: string
  hackathonCountErr: string
  priorExperienceErr: string
}

export interface ConnectedProps {
    resume: any
    linkedin: string
    github: string
    cruzCoins: string
    anythingElse: string

    resumeErr: string
    linkedinErr: string
    githubErr: string
    cruzCoinsErr: string
    anythingElseErr: string
}

export interface MLHProps {
    conductAgree: string 
    tosAgree: string
    agreementErr: string
}

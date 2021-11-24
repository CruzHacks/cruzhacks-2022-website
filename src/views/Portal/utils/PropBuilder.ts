import {
  SerializableContactProps,
  SerializableShortAnswerProps,
  SerializablePriorExperienceProps,
  SerializableDemographicProps,
  SerializableConnectedProps,
  SerializableMLHProps,
  ContactProps,
  ShortAnswerProps,
  PriorExperienceProps,
  DemographicProps,
  ConnectedProps,
  MLHProps,
} from "Props/application/props"

export const generateContactProps = (
  email: string = "",
  props?: SerializableContactProps
) => {
  const newObj: ContactProps = {
    fname: props?.fname || "",
    lname: props?.lname || "",
    phone: props?.phone || "",
    email: email || props?.email || "",
    fnameErr: "",
    lnameErr: "",
    phoneErr: "",
    emailErr: "",
  }
  return newObj
}

export const generateShortAnswerProps = (
  props?: SerializableShortAnswerProps
) => {
  const newObj: ShortAnswerProps = {
    whyCruzHacks: props?.whyCruzHacks || "",
    newThisYear: props?.newThisYear || "",
    grandestInvention: props?.grandestInvention || "",
    whyCruzHacksErr: "",
    newThisYearErr: "",
    grandestInventionErr: "",
  }
  return newObj
}

export const generatePriorExperienceProps = (
  props?: SerializablePriorExperienceProps
) => {
  const newObj: PriorExperienceProps = {
    firstCruzHacks: props?.firstCruzHacks || "No",
    hackathonCount: props?.hackathonCount || "0",
    priorExperience: props?.priorExperience || "",
    firstCruzHacksErr: "",
    hackathonCountErr: "",
    priorExperienceErr: "",
  }
  return newObj
}

export const generateDemographicProps = (
  props?: SerializableDemographicProps
) => {
  const newObj: DemographicProps = {
    age: props?.age || "0",
    pronouns: props?.pronouns || [],
    race: props?.race || "",
    sexuality: props?.sexuality || [],
    school: props?.school || "",
    collegeAffiliation: props?.collegeAffiliation || "",
    eventLocation: props?.eventLocation || "",
    major: props?.major || "",
    currentStanding: props?.currentStanding || "",
    graduation: props?.graduation || "0",
    country: props?.country || "",
    ageErr: "",
    pronounsErr: "",
    raceErr: "",
    sexualityErr: "",
    schoolErr: "",
    collegeAffiliationErr: "",
    eventLocationErr: "",
    majorErr: "",
    currentStandingErr: "",
    graduationErr: "",
    countryErr: "",
  }
  return newObj
}

export const generateConnectedProps = (props?: SerializableConnectedProps) => {
  const newObj: ConnectedProps = {
    resume: null,
    linkedin: props?.linkedin || "",
    github: props?.github || "",
    cruzCoins: props?.cruzCoins || "",
    anythingElse: props?.anythingElse || "",
    resumeErr: "",
    linkedinErr: "",
    githubErr: "",
    cruzCoinsErr: "",
    anythingElseErr: "",
  }
  return newObj
}

export const generateMLHProps = (props?: SerializableMLHProps) => {
  const newObj: MLHProps = {
    conductAgree: props?.conductAgree || "No",
    tosAgree: props?.tosAgree || "No",
    communicationAgree: props?.tosAgree || "No",
    agreementErr: "",
  }
  return newObj
}

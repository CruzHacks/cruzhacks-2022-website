import {
  ContactProps,
  ShortAnswerProps,
  PriorExperienceProps,
  DemographicProps,
} from "Props/application/props"

export const generateContactProps = (
  fname: string = "",
  lname: string = "",
  phone: string = "",
  email: string | undefined = ""
) => {
  const newObj: ContactProps = {
    fname,
    lname,
    phone,
    email,
    fnameErr: "",
    lnameErr: "",
    phoneErr: "",
    emailErr: "",
  }
  return newObj
}

export const generateShortAnswerProps = () => {
  const newObj: ShortAnswerProps = {
    whyCruzHacks: "",
    newThisYear: "",
    grandestInvention: "",
    whyCruzHacksErr: "",
    newThisYearErr: "",
    grandestInventionErr: "",
  }
  return newObj
}

export const generatePriorExperienceProps = () => {
  const newObj: PriorExperienceProps = {
    firstCruzHacks: true,
    hackathonCount: "0",
    priorExperience: "",
    firstCruzHacksErr: "",
    hackathonCountErr: "",
    priorExperienceErr: "",
  }
  return newObj
}

export const generateDemographicProps = () => {
  const newObj: DemographicProps = {
    age,
    pronounCount,
    pronouns,
    race,
    sexualityCount,
    sexuality,
    school,
    collegeAffiliation,
    eventLocation,
    major,
    currentStanding,
    country,
    ageErr: "",
    pronounsErr: "",
    raceErr: "",
    sexualityErr: "",
    schoolErr: "",
    collegeAffiliationErr: "",
    eventLocationErr: "",
    majorErr: "",
    currentStandingErr: "",
    countryErr: "",
  }
  return newObj
}

import {
  ContactProps,
  ShortAnswerProps,
  PriorExperienceProps,
} from "Props/application/props"

export const generateContactProps = (
  fname: string,
  lname: string,
  phone: string,
  email: string | undefined
) => {
  const newObj: ContactProps = {
    fname,
    lname,
    phone,
    email,
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
    hackathonCount: 0,
    priorExperience: "",
    firstCruzHacksErr: "",
    hackathonCountErr: "",
    priorExperienceErr: "",
  }
  return newObj
}

import {
  ContactProps,
  DemographicProps,
  ShortAnswerProps,
  PriorExperienceProps,
  ConnectedProps,
  MLHProps,
} from "Props/application/props"

import { Dispatch, SetStateAction } from "react"
import { alphanumericPunctuationRegex, alphanumericRegex } from "utils/regex"

function updateErrorMessage(
  message: string,
  fieldname: string,
  dispatcher: Dispatch<SetStateAction<any>>
) {
  dispatcher((prev: any) => ({
    ...prev,
    fieldname: message,
  }))
}

/*
    validate
    params: pageFormData
    return: true if no errors, false if errors
    description: 
    Runs through each field of a page, sets errors as necessary, returns false if an error still exists
*/
export const validateContactForm = (
  pageData: ContactProps,
  dispatchError: Dispatch<SetStateAction<ContactProps>>
) => {
  const fields = ["fname", "lname", "phone"]
  let isValid = true
  const { fname, lname, phone } = pageData
  fields.forEach(field => {
    switch (field) {
      case "fname":
        if (fname.length === 0) {
        } else if (fname.length > 50) {
        } else if (fname) {
        } else {
        }
        break
      case "lname":
        if (fname.length === 0) {
        } else if (fname.length > 50) {
        } else if (fname) {
        } else {
        }
        break
      case "phone":
        if (fname.length === 0) {
        } else if (fname.length > 50) {
        } else if (fname) {
        } else {
        }
        break
    }
  })
  return isValid
}

export const validatedemographicForm = (
  pageData: DemographicProps,
  dispatchError: Dispatch<SetStateAction<DemographicProps>>
) => {
  const fields = [
    "age",
    "pronouns",
    "race",
    "sexuality",
    "school",
    "collegeAffiliation",
    "eventLocation",
    "major",
    "currentStanding",
    "country",
  ]
  let isValid = true
  const {
    age,
    pronouns,
    race,
    sexuality,
    school,
    collegeAffiliation,
    major,
    currentStanding,
    country,
  } = pageData
  fields.forEach(field => {
    switch (field) {
      case "age":
        if (age <= "5") {
        } else if (age >= "100") {
        } else {
        }
        break
      case "pronouns":

      case "sexuality":

      case "school":

      case "collegeAffiliation":

      case "eventLocation":

      case "major":

      case "currentStanding":

      case "country":
    }
  })

  return isValid
}

export const validateshortAnswerForm = (
  pageData: ShortAnswerProps,
  dispatchError: Dispatch<SetStateAction<ShortAnswerProps>>
) => {
  const fields = ["whyCruzHacks", "newThisYear", "grandestInvention"]
  let isValid = true
  const { whyCruzHacks, newThisYear, grandestInvention } = pageData
  fields.forEach(field => {
    switch (field) {
      case "whyCruzHacks":

      case "newThisYear":

      case "grandestInvention":
    }
  })
  return isValid
}

export const validatepriorExperienceForm = (
  pageData: PriorExperienceProps,
  dispatchError: Dispatch<SetStateAction<PriorExperienceProps>>
) => {
  const fields = ["firstCruzHacks", "hackathonCount", "priorExperience"]
  let isValid = true
  const { firstCruzHacks, hackathonCount, priorExperience } = pageData
  fields.forEach(field => {
    switch (field) {
      case "firstCruzHacks":

      case "hackathonCount":

      case "priorExperience":
    }
  })
  return isValid
}

export const validateConnectedForm = (
  pageData: ConnectedProps,
  dispatchError: Dispatch<SetStateAction<ConnectedProps>>
) => {
  const fields = ["resume", "linkedin", "github", "cruzCoins", "anythingElse"]
  let isValid = true
  const { resume, linkedin, github, cruzCoins, anythingElse } = pageData
  fields.forEach(field => {
    switch (field) {
      case "file":

      case "linkedin":

      case "github":

      case "cruzCoins":

      case "anythingElse":
    }
  })
  return isValid
}

export const validateMLHForm = (
  pageData: MLHProps,
  dispatchError: Dispatch<SetStateAction<MLHProps>>
) => {
  const isValid = pageData.conductAgree && pageData.tosAgree
  if (!isValid) {
    dispatchError(prev => ({
      ...prev,
      agreementErr: "Please Agree to MLH Code of Conduct and Terms of Service",
    }))
  } else {
    updateErrorMessage("", "agreementErr", dispatchError)
  }
  return isValid
}

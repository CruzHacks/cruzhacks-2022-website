import {
  ContactProps,
  DemographicProps,
  ShortAnswerProps,
  PriorExperienceProps,
  ConnectedProps,
  MLHProps,
} from "Props/application/props"

import { Dispatch, SetStateAction } from "react"
import { phoneRegex, alphanumericPunctuationRegex } from "utils/regex"

function updateErrorMessage(
  message: string,
  fieldname: string,
  dispatcher: Dispatch<SetStateAction<any>>
) {
  dispatcher((prev: any) => ({
    ...prev,
    [fieldname]: message,
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
  dispatchError: Dispatch<SetStateAction<ContactProps>>,
  onSubmit?: boolean
) => {
  const fields = ["fname", "lname", "phone"]
  let isValid = true
  const { fname, lname, phone } = pageData
  fields.forEach(field => {
    switch (field) {
      case "fname":
        if (onSubmit && fname.length === 0) {
          isValid = false
          updateErrorMessage("Input your First Name", "fnameErr", dispatchError)
        } else if (fname.length > 25) {
          isValid = false
          updateErrorMessage(
            "First Name is Too Long",
            "fnameErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(fname)) {
          isValid = false
          updateErrorMessage(
            "First Name contains Invalid Character",
            "fnameErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "fnameErr", dispatchError)
        }
        break
      case "lname":
        if (onSubmit && lname.length === 0) {
          isValid = false
          updateErrorMessage("Input your Last Name", "lnameErr", dispatchError)
        } else if (lname.length > 25) {
          isValid = false
          updateErrorMessage("Last Name is Too Long", "lnameErr", dispatchError)
        } else if (alphanumericPunctuationRegex(lname)) {
          isValid = false
          updateErrorMessage(
            "Last Name contains Invalid Character",
            "lnameErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "lnameErr", dispatchError)
        }
        break
      case "phone":
        if (onSubmit && phone.length === 0) {
          isValid = false
          updateErrorMessage(
            "Input your Phone Number",
            "phoneErr",
            dispatchError
          )
        } else if (phone.length > 12) {
          isValid = false
          updateErrorMessage(
            "Phone Number is Too Long",
            "phoneErr",
            dispatchError
          )
        } else if (phoneRegex(phone)) {
          isValid = false
          updateErrorMessage(
            "Please Input a Valid Phone Number",
            "phoneErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "phoneErr", dispatchError)
        }
        break
      default:
        break
    }
  })
  return isValid
}

export const validatedemographicForm = (
  pageData: DemographicProps,
  dispatchError: Dispatch<SetStateAction<DemographicProps>>,
  onSubmit?: boolean
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
    eventLocation,
    major,
    currentStanding,
    country,
  } = pageData
  const pronounCount = pronouns.length
  const sexaulityCount = sexuality.length
  const ageInt = parseInt(age, 10)

  fields.forEach(field => {
    switch (field) {
      case "age":
        if (ageInt < 5) {
          isValid = false
          updateErrorMessage(
            "Participant must be older than 5",
            "ageErr",
            dispatchError
          )
        } else if (ageInt > 99) {
          isValid = false
          updateErrorMessage(
            "Participant must be younger than 100",
            "ageErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "ageErr", dispatchError)
        }
        break
      case "pronouns":
        if (onSubmit && pronounCount === 0) {
          isValid = false
          updateErrorMessage(
            "Please input your pronouns",
            "pronounsErr",
            dispatchError
          )
        } else if (pronounCount > 5) {
          isValid = false
          updateErrorMessage(
            "Too many pronouns inputted",
            "pronounsErr",
            dispatchError
          )
        } else {
          let pronounValid = true
          for (let i = 0; i < pronounCount; i += 1) {
            if (
              alphanumericPunctuationRegex(pronouns[i]) ||
              pronouns[i].length > 50
            ) {
              isValid = false
              pronounValid = false
              updateErrorMessage(
                "Inputted pronouns is not Alphanumeric",
                "pronounsErr",
                dispatchError
              )
            }
          }
          if (pronounValid) {
            updateErrorMessage("", "pronounsErr", dispatchError)
          }
        }
        break
      case "sexuality":
        if (onSubmit && sexaulityCount === 0) {
          isValid = false
          updateErrorMessage(
            "Please input your gender identity/sexuality",
            "sexualityErr",
            dispatchError
          )
        } else if (sexaulityCount > 5) {
          isValid = false
          updateErrorMessage(
            "Too many options selected",
            "sexualityErr",
            dispatchError
          )
        } else {
          let sexualityValid = true
          for (let i = 0; i < sexaulityCount; i += 1) {
            if (
              alphanumericPunctuationRegex(sexuality[i]) ||
              sexuality[i].length > 50
            ) {
              isValid = false
              sexualityValid = false
              updateErrorMessage(
                "Inputted Identity is not Alphanumeric",
                "sexualityErr",
                dispatchError
              )
            }
          }
          if (sexualityValid) {
            updateErrorMessage("", "sexualityErr", dispatchError)
          }
        }
        break
      case "race":
        if (onSubmit && race.length <= 0) {
          isValid = false
          updateErrorMessage("Please input your race", "raceErr", dispatchError)
        } else if (race.length > 50) {
          isValid = false
          updateErrorMessage(
            "Inputted Race is Too Long",
            "raceErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(race)) {
          isValid = false
          updateErrorMessage(
            "Inputted Race Should be alphanumeric",
            "raceErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "raceErr", dispatchError)
        }
        break
      case "school":
        if (onSubmit && school.length <= 0) {
          isValid = false
          updateErrorMessage(
            "Please input the school you attend",
            "schoolErr",
            dispatchError
          )
        } else if (school.length > 100) {
          isValid = false
          updateErrorMessage(
            "Inputted School Name is Too Long",
            "schoolErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(school)) {
          isValid = false
          updateErrorMessage(
            "Inputted School Should be alphanumeric",
            "schoolErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "schoolErr", dispatchError)
        }
        break
      case "collegeAffiliation":
        if (onSubmit && collegeAffiliation.length === 0) {
          isValid = false
          updateErrorMessage(
            "Please Input a college affiliation",
            "collegeAffiliationErr",
            dispatchError
          )
        } else if (collegeAffiliation.length > 100) {
          isValid = false
          updateErrorMessage(
            "College Affiliation Response is too Long",
            "collegeAffiliationErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(collegeAffiliation)) {
          isValid = false
          updateErrorMessage(
            "Inputted College Affiliation Should be alphanumeric",
            "collegeAffiliationErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "collegeAffiliationErr", dispatchError)
        }
        break
      case "eventLocation":
        if (onSubmit && eventLocation.length === 0) {
          isValid = false
          updateErrorMessage(
            "Please input your location during the event",
            "eventLocationErr",
            dispatchError
          )
        } else if (eventLocation.length > 100) {
          isValid = false
          updateErrorMessage(
            "Inputted Location Length is too Long",
            "eventLocationErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(eventLocation)) {
          isValid = false
          updateErrorMessage(
            "Inputted Location Should be alphanumeric",
            "eventLocationErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "eventLocationErr", dispatchError)
        }
        break
      case "major":
        if (onSubmit && major.length === 0) {
          isValid = false
          updateErrorMessage(
            "Please input your major",
            "majorErr",
            dispatchError
          )
        } else if (major.length > 50) {
          isValid = false
          updateErrorMessage(
            "Inputted Major is too Long",
            "majorErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(major)) {
          isValid = false
          updateErrorMessage(
            "Inputted major Should be alphanumeric",
            "majorErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "majorErr", dispatchError)
        }
        break
      case "currentStanding":
        if (onSubmit && currentStanding.length === 0) {
          isValid = false
          updateErrorMessage(
            "Please input your current standing",
            "currentStandingErr",
            dispatchError
          )
        } else if (currentStanding.length > 50) {
          isValid = false
          updateErrorMessage(
            "Inputted Standing is too Long",
            "currentStandingErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(currentStanding)) {
          isValid = false
          updateErrorMessage(
            "Inputted Standing Should be alphanumeric",
            "currentStandingErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "currentStandingErr", dispatchError)
        }
        break
      case "country":
        if (onSubmit && country.length === 0) {
          isValid = false
          updateErrorMessage(
            "Please input your current country of residence",
            "countryErr",
            dispatchError
          )
        } else if (country.length > 50) {
          isValid = false
          updateErrorMessage(
            "Inputted Country is Too Long",
            "countryErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(country)) {
          isValid = false
          updateErrorMessage(
            "Inputted country Should be alphanumeric",
            "countryErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "countryErr", dispatchError)
        }
        break
      default:
        break
    }
  })
  return isValid
}

export const validateshortAnswerForm = (
  pageData: ShortAnswerProps,
  dispatchError: Dispatch<SetStateAction<ShortAnswerProps>>,
  onSubmit?: boolean
) => {
  const fields = ["whyCruzHacks", "newThisYear", "grandestInvention"]
  let isValid = true
  const { whyCruzHacks, newThisYear, grandestInvention } = pageData
  fields.forEach(field => {
    switch (field) {
      case "whyCruzHacks":
        if (onSubmit && whyCruzHacks.length === 0) {
          isValid = false
          updateErrorMessage(
            "Please Input a Response",
            "whyCruzHacksErr",
            dispatchError
          )
        } else if (whyCruzHacks.length > 250) {
          isValid = false
          updateErrorMessage(
            "Response is Too Long",
            "whyCruzHacksErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(whyCruzHacks)) {
          isValid = false
          updateErrorMessage(
            "Response Should be alphanumeric",
            "whyCruzHacksErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "whyCruzHacksErr", dispatchError)
        }
        break
      case "newThisYear":
        if (onSubmit && newThisYear.length === 0) {
          isValid = false
          updateErrorMessage(
            "Please Input a Response",
            "newThisYearErr",
            dispatchError
          )
        } else if (newThisYear.length > 250) {
          isValid = false
          updateErrorMessage(
            "Response is Too Long",
            "newThisYearErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(newThisYear)) {
          isValid = false
          updateErrorMessage(
            "Response Should be alphanumeric",
            "newThisYearErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "newThisYearErr", dispatchError)
        }
        break
      case "grandestInvention":
        if (onSubmit && grandestInvention.length === 0) {
          isValid = false
          updateErrorMessage(
            "Please Input a Response",
            "grandestInventionErr",
            dispatchError
          )
        } else if (grandestInvention.length > 250) {
          isValid = false
          updateErrorMessage(
            "Response is Too Long",
            "grandestInventionErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(grandestInvention)) {
          isValid = false
          updateErrorMessage(
            "Response Should be alphanumeric",
            "grandestInventionErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "grandestInventionErr", dispatchError)
        }
        break
      default:
        break
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
  const hackathonsCountInt = parseInt(hackathonCount, 10)
  fields.forEach(field => {
    switch (field) {
      case "firstCruzHacks":
        if (firstCruzHacks !== "Yes" && firstCruzHacks !== "No") {
          isValid = false
          updateErrorMessage(
            "Please Input a response",
            "firstCruzHacksErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "firstCruzHacksErr", dispatchError)
        }
        break
      case "hackathonCount":
        if (hackathonsCountInt < 0) {
          isValid = false
          updateErrorMessage(
            "Invalid Hackathon Count",
            "hackathonCountErr",
            dispatchError
          )
        } else if (hackathonsCountInt > 100) {
          isValid = false
          updateErrorMessage("Limit is 99", "hackathonCountErr", dispatchError)
        } else {
          updateErrorMessage("", "hackathonCountErr", dispatchError)
        }
        break
      case "priorExperience":
        if (priorExperience.length > 100) {
          isValid = false
          updateErrorMessage(
            "Response is Too Long",
            "priorExperienceErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(priorExperience)) {
          isValid = false
          updateErrorMessage(
            "Response Should be alphanumeric",
            "priorExperienceErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "priorExperienceErr", dispatchError)
        }
        break
      default:
        break
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
      case "resume":
        if (resume) {
          if (resume.size > 1_000_000) {
            isValid = false
            updateErrorMessage(
              "Resume File Upload too large, Resume can't be bigger than 1MB",
              "resumeErr",
              dispatchError
            )
          } else {
            updateErrorMessage("", "resumeErr", dispatchError)
          }
        }
        break
      case "linkedin":
        if (linkedin.length > 100) {
          isValid = false
          updateErrorMessage(
            "LinkedIn Id is too Long",
            "linkedinErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(linkedin)) {
          isValid = false
          updateErrorMessage(
            "LinkedIn Id is Invalid",
            "linkedinErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "linkedinErr", dispatchError)
        }
        break
      case "github":
        if (github.length > 100) {
          isValid = false
          updateErrorMessage(
            "Github username is too Long",
            "githubErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(github)) {
          isValid = false
          updateErrorMessage(
            "Github username is Invalid",
            "githubErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "githubErr", dispatchError)
        }
        break
      case "cruzCoins":
        if (cruzCoins.length > 100) {
          isValid = false
          updateErrorMessage(
            "Response is Too Long",
            "cruzCoinsErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(cruzCoins)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric characters only",
            "cruzCoinsErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "cruzCoinsErr", dispatchError)
        }
        break
      case "anythingElse":
        if (anythingElse.length > 100) {
          isValid = false
          updateErrorMessage(
            "Response is Too Long",
            "anythingElseErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(anythingElse)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric characters only",
            "anythingElseErr",
            dispatchError
          )
        } else {
          updateErrorMessage("", "anythingElseErr", dispatchError)
        }
        break
      default:
        break
    }
  })
  return isValid
}

export const validateMLHForm = (
  pageData: MLHProps,
  dispatchError: Dispatch<SetStateAction<MLHProps>>,
  onSubmit?: boolean
) => {
  if (onSubmit === false) {
    return true
  }
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

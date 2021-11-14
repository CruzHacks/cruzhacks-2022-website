import {
  ContactProps,
  DemographicProps,
  ShortAnswerProps,
  PriorExperienceProps,
  ConnectedProps,
  MLHProps,
} from "Props/application/props"

import { Dispatch, SetStateAction } from "react"
import {
  phoneRegex,
  alphanumericPunctuationRegex,
  alphanumericPunctuationRegexWithNewLine,
} from "utils/regex"

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
            "Input has 25 char limit",
            "fnameErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(fname)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
          updateErrorMessage(
            "Input has 25 char limit",
            "lnameErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(lname)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
        } else if (phone.length > 20) {
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

  const validAffiliation = [
    "i am not a ucsc student",
    "i am a UCSC grad student with no college affiliation",
    "college 9",
    "college 10",
    "cowell",
    "stevenson",
    "crown",
    "merrill",
    "kresge",
    "porter",
    "rachel carson college",
    "oakes",
  ]

  const validLocation = [
    "on-campus at uc santa cruz",
    "santa cruz county",
    "other",
    "unsure",
  ]

  fields.forEach(field => {
    switch (field) {
      case "age":
        if (ageInt < 13) {
          isValid = false
          updateErrorMessage(
            "Participant must be older than 13",
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
                "Inputs have 50 char limit and must be alphanumeric",
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
                "Inputs have 50 char limit and must be alphanumeric",
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
            "Response has 50 char limit",
            "raceErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(race)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
            "Response has 100 char limit",
            "schoolErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(school)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
            "Please input an affiliation",
            "collegeAffiliationErr",
            dispatchError
          )
        } else if (collegeAffiliation.length > 100) {
          isValid = false
          updateErrorMessage(
            "Response has 100 char limit",
            "collegeAffiliationErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(collegeAffiliation)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
            "collegeAffiliationErr",
            dispatchError
          )
        } else if (
          onSubmit &&
          !validAffiliation.includes(collegeAffiliation.toLowerCase())
        ) {
          isValid = false
          updateErrorMessage(
            "Chosen Affiliation is Not Listed",
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
            "Response has 100 char limit",
            "eventLocationErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(eventLocation)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
            "eventLocationErr",
            dispatchError
          )
        } else if (
          onSubmit &&
          !validLocation.includes(eventLocation.toLowerCase())
        ) {
          isValid = false
          updateErrorMessage(
            "Chosen eventLocation is not listed",
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
            "Response has 250 char limit",
            "majorErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(major)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
            "Response has 50 char limit",
            "currentStandingErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(currentStanding)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
            "Response has 50 char limit",
            "countryErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegex(country)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
            "Response has 250 char limit",
            "whyCruzHacksErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegexWithNewLine(whyCruzHacks)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
            "Response has 250 char limit",
            "newThisYearErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegexWithNewLine(newThisYear)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
            "Response has 250 char limit",
            "grandestInventionErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegexWithNewLine(grandestInvention)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
          updateErrorMessage("Limit is 100", "hackathonCountErr", dispatchError)
        } else {
          updateErrorMessage("", "hackathonCountErr", dispatchError)
        }
        break
      case "priorExperience":
        if (priorExperience.length > 100) {
          isValid = false
          updateErrorMessage(
            "Response has 100 char limit",
            "priorExperienceErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegexWithNewLine(priorExperience)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
        } else {
          updateErrorMessage("", "resumeErr", dispatchError)
        }
        break
      case "linkedin":
        if (linkedin.length > 100) {
          isValid = false
          updateErrorMessage(
            "Response has 100 char limit",
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
            "Response has 100 char limit",
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
            "Response has 100 char limit",
            "cruzCoinsErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegexWithNewLine(cruzCoins)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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
            "Response has 100 char limit",
            "anythingElseErr",
            dispatchError
          )
        } else if (alphanumericPunctuationRegexWithNewLine(anythingElse)) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric chars only",
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

import {
  ContactProps,
  DemographicProps,
  ShortAnswerProps,
  PriorExperienceProps,
  ConnectedProps,
  MLHProps,
} from "Props/application/props"

import { Dispatch, SetStateAction } from "react"
// import {
//   phoneRegex,
//   alphanumericPunctuationRegex,
//   alphanumericRegex,
// } from "utils/regex"

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
        } else if (fname.length > 50) {
          isValid = false
          updateErrorMessage(
            "First Name is Too Long",
            "fnameErr",
            dispatchError
          )
        } else if (!fname) {
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
        } else if (lname.length > 50) {
          isValid = false
          updateErrorMessage("Last Name is Too Long", "lnameErr", dispatchError)
        } else if (!lname) {
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
        } else if (phone.length > 50) {
          isValid = false
          updateErrorMessage(
            "Phone Number is Too Long",
            "phoneErr",
            dispatchError
          )
        } else if (!phone) {
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
  fields.forEach(field => {
    switch (field) {
      case "age":
        if (age <= "5") {
          isValid = false
          updateErrorMessage(
            "Participant must be older than 5",
            "ageErr",
            dispatchError
          )
        } else if (age >= "100") {
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
            "pronounErr",
            dispatchError
          )
        } else if (pronounCount > 5) {
          isValid = false
          updateErrorMessage(
            "Too many pronouns inputted",
            "pronounErr",
            dispatchError
          )
        } else {
          for (let i = 0; i < pronounCount; i += 1) {
            if (pronouns[i]) {
              isValid = false
              updateErrorMessage(
                "Inputted pronouns is not Alphanumeric",
                "pronounErr",
                dispatchError
              )
            }
          }
          updateErrorMessage("", "pronounErr", dispatchError)
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
          for (let i = 0; i < sexaulityCount; i += 1) {
            if (sexuality[i]) {
              isValid = false
              updateErrorMessage(
                "Inputted Identity is not Alphanumeric",
                "sexualityErr",
                dispatchError
              )
            }
          }
          updateErrorMessage("", "sexualityErr", dispatchError)
        }
        break
      case "race":
        if (onSubmit && race.length <= 0) {
          isValid = false
          updateErrorMessage("Please input your race", "raceErr", dispatchError)
        } else if (race.length >= 100) {
          isValid = false
          updateErrorMessage(
            "Inputted Race is Too Long",
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
        } else if (school.length >= 100) {
          isValid = false
          updateErrorMessage(
            "Inputted School Name is Too Long",
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
        } else if (collegeAffiliation.length >= 100) {
          isValid = false
          updateErrorMessage(
            "College Affiliation Response is too Long",
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
        } else if (eventLocation.length >= 100) {
          isValid = false
          updateErrorMessage(
            "Inputted Location Length is too Long",
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
        } else if (major.length >= 100) {
          isValid = false
          updateErrorMessage(
            "Inputted Major is too Long",
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
        } else if (currentStanding.length >= 100) {
          isValid = false
          updateErrorMessage(
            "Inputted Standing is too Long",
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
        } else if (country.length >= 100) {
          isValid = false
          updateErrorMessage(
            "Inputted Country is Too Long",
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
  const { hackathonCount, priorExperience } = pageData
  fields.forEach(field => {
    switch (field) {
      case "hackathonCount":
        if (hackathonCount <= "5") {
          isValid = false
          updateErrorMessage("", "hackathnoCountErr", dispatchError)
        } else if (hackathonCount >= "100") {
          isValid = false
          updateErrorMessage("", "hackathonCountErr", dispatchError)
        } else {
          updateErrorMessage("", "hackathonCountErr", dispatchError)
        }
        break
      case "priorExperience":
        if (priorExperience.length > 250) {
          isValid = false
          updateErrorMessage(
            "Response is Too Long",
            "priorExperienceErr",
            dispatchError
          )
        } else if (priorExperience) {
          isValid = false
          updateErrorMessage(
            "Response should be alphanumeric characters only",
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
  const { linkedin, github, cruzCoins, anythingElse } = pageData
  fields.forEach(field => {
    switch (field) {
      case "linkedin":
        if (linkedin.length > 250) {
          isValid = false
          updateErrorMessage(
            "LinkedIn Id is too Long",
            "linkedinErr",
            dispatchError
          )
        } else if (linkedin) {
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
        if (github.length > 250) {
          isValid = false
          updateErrorMessage(
            "Github username is too Long",
            "githubErr",
            dispatchError
          )
        } else if (github) {
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
        if (cruzCoins.length > 250) {
          isValid = false
          updateErrorMessage(
            "Response is Too Long",
            "cruzCoinsErr",
            dispatchError
          )
        } else if (cruzCoins) {
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
        if (anythingElse.length > 250) {
          isValid = false
          updateErrorMessage(
            "Response is Too Long",
            "anythingElseErr",
            dispatchError
          )
        } else if (anythingElse) {
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

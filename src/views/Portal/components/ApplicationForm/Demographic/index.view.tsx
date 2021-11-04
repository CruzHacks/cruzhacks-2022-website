import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import universityList from "views/Portal/utils/Universities"
import majors from "views/Portal/utils/Majors"
import Countries from "views/Portal/utils/Countries"
import TextField from "../../FormInputs/TextField"
import DropDown from "../../FormInputs/DropDown"
import CheckBox from "../../FormInputs/CheckBox"

const DemographicPage: React.FC = () => {
  const { demographicFormData, setDemographicFormData } = useApplication()!
  const handleChange = (event: any) => {
    const name = event.target.getAttribute("aria-label")
    if (Object.keys(demographicFormData).includes(name)) {
      const copy = { ...demographicFormData, [name]: event.target.value }
      setDemographicFormData(copy)
    }
  }
  console.log(demographicFormData)
  const collegeAffiliation = (
    <DropDown
      question='College Affiliation'
      inputs={[
        { label: "College 9" },
        { label: "College 10" },
        { label: "Cowell" },
        { label: "Crown" },
        { label: "Kresge" },
        { label: "Merrill" },
        { label: "Oakes" },
        { label: "Porter" },
        { label: "Rachel Carson" },
        { label: "Stevenson" },
        { label: "Graduate Student, no affiliation" },
      ]}
      name='collegeAffiliation'
      handleChange={handleChange}
    />
  )
  console.log(demographicFormData)
  return (
    <div className='demographic-page'>
      <div className='demographic-page__form-container'>
        <div className='demographic-page__form-container--title'>
          Demographic Information
        </div>
        <div className='demographic-page__form-container__inputs'>
          <TextField
            className='demographic-page__form-container__inputs--textfield'
            name='Age'
            handleChange={handleChange}
            fieldState={demographicFormData.age}
            errorMessage={demographicFormData.ageErr}
            label='age'
            maxLength={3}
          />
          <CheckBox
            errorMessage={demographicFormData.pronounsErr}
            question='Pronouns'
            name='pronouns'
            inputs={[
              { label: "He / him / his" },
              { label: "She / her / hers" },
              { label: "They / them / theirs" },
              { label: "Other" },
              { label: "Prefer not to answer" },
            ]}
            handleChange={() => {}}
          />
          <DropDown
            question='Race / Ethnicity'
            errorMessage={demographicFormData.raceErr}
            inputs={[
              { label: "American Indian or Alaskan Native" },
              { label: "Asian / Pacific Islander" },
              { label: "Black or African American" },
              { label: "Hispanic" },
              { label: "White / Caucasian" },
              { label: "Multiple ethnicities / Other" },
              { label: "Prefer not to answer" },
            ]}
            name='race'
            handleChange={() => {}}
          />
          <CheckBox
            errorMessage={demographicFormData.sexualityErr}
            question='Sexuality / Gender Identity'
            name='sexuality'
            inputs={[
              { label: "Bisexual" },
              { label: "Heterosexual" },
              { label: "Gay" },
              { label: "Lesbian" },
              { label: "Queer" },
              { label: "Genderqueer" },
              { label: "Cisgender" },
              { label: "Other (please specify)" },
              { label: "Prefer not to answer" },
            ]}
            handleChange={() => {}}
          />
          <TextField
            className='demographic-page__form-container__inputs--textfield'
            name='School'
            handleChange={() => {}}
            fieldState={demographicFormData.school}
            errorMessage={demographicFormData.schoolErr}
            label='school'
            maxLength={100}
          />
          {demographicFormData.school === "UCSC" ? collegeAffiliation : ""}
          <DropDown
            errorMessage={demographicFormData.collegeAffiliationErr}
            question='Where will you be located at the time of the event (January 14-16)?'
            inputs={[
              { label: "On-campus at UC Santa Cruz" },
              { label: "Santa Cruz County" },
              { label: "Other" },
              { label: "Unsure" },
            ]}
            name='eventLocation'
            handleChange={() => {}}
          />
          <TextField
            className='demographic-page__form-container__inputs--textfield'
            name='Major'
            handleChange={() => {}}
            fieldState={demographicFormData.major}
            errorMessage={demographicFormData.majorErr}
            label='major'
            maxLength={50}
          />
          <DropDown
            question='Current Level of Study'
            errorMessage={demographicFormData.currentStandingErr}
            inputs={[
              { label: "N/A" },
              { label: "Freshman" },
              { label: "Sophomore" },
              { label: "Junior" },
              { label: "Senior" },
              { label: "Super-Senior" },
              { label: "Post-Graduate" },
            ]}
            name='currentStanding'
            handleChange={() => {}}
          />
          <TextField
            className='demographic-page__form-container__inputs--textfield'
            name='Country'
            handleChange={() => {}}
            fieldState={demographicFormData.country}
            errorMessage={demographicFormData.countryErr}
            label='age'
            maxLength={50}
          />
        </div>
      </div>
    </div>
  )
}
export default DemographicPage

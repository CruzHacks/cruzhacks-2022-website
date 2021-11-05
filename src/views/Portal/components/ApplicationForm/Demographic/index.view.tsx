import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import universityList from "views/Portal/utils/Universities"
import majors from "views/Portal/utils/Majors"
import Countries from "views/Portal/utils/Countries"
// import TextField from "../../FormInputs/TextField"
// import RadioForm from "../../FormInputs/Radio"
import DropDown from "../../FormInputs/DropDown"
import SearchBox from "../../FormInputs/SearchBox"
import NumberField from "../../FormInputs/NumberBox/index"
import CheckBox from "../../FormInputs/CheckBox"

const DemographicPage: React.FC = () => {
  const { demographicFormData, setDemographicFormData } = useApplication()!
  const handleChange = (event: any) => {
    const name = event.target.getAttribute("name")
    if (Object.keys(demographicFormData).includes(name)) {
      const copy = { ...demographicFormData, [name]: event.target.value }
      setDemographicFormData(copy)
    }
  }
  const collegeAffiliation = (
    <DropDown
      question='College Affiliation'
      errorMessage={demographicFormData.collegeAffiliationErr}
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

  return (
    <div className='demographic-page'>
      <div className='demographic-page__form-container'>
        <div className='demographic-page__form-container--title'>
          Demographic Information
        </div>
        <div className='demographic-page__form-container__inputs'>
          <NumberField
            className='demographic-page__form-container__inputs--textfield'
            name='Age'
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDemographicFormData(prev => ({
                ...prev,
                whyCruzHacks: e.target.value,
              }))
            }}
            fieldState={demographicFormData.age}
            errorMessage={demographicFormData.ageErr}
            label='age'
            min={0}
            max={100}
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
            handleChange={handleChange}
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
            handleChange={handleChange}
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
            handleChange={handleChange}
          />
          <SearchBox
            question='School'
            data={universityList.map(item => item.institution)}
            label='school'
            fieldState={demographicFormData.school}
            maxReturn={25}
            errorMessage={demographicFormData.schoolErr}
            handleChange={handleChange}
          />
          {demographicFormData.school === "University of California-Santa Cruz"
            ? collegeAffiliation
            : ""}
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
            handleChange={handleChange}
          />
          <SearchBox
            question='Major'
            data={majors.map(item => item.major)}
            label='major'
            fieldState={demographicFormData.major}
            maxReturn={25}
            errorMessage={demographicFormData.majorErr}
            handleChange={handleChange}
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
            handleChange={handleChange}
          />
          <SearchBox
            question='Country'
            data={Countries.map(item => item.name)}
            label='country'
            fieldState={demographicFormData.country}
            maxReturn={25}
            errorMessage={demographicFormData.countryErr}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}
export default DemographicPage

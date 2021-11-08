import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import universityList from "views/Portal/utils/Universities"
import majors from "views/Portal/utils/Majors"
import Countries from "views/Portal/utils/Countries"
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
  return (
    <div className='demographic-page-container'>
      <div className='demographic-page-container__questions'>
        <div className='demographic-page-container__title'>
          Demographics Information
        </div>
        <div className='demographic-page-container__fields'>
          <NumberField
            name='Age'
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDemographicFormData(prev => ({
                ...prev,
                age: e.target.value,
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
            value={demographicFormData.pronouns}
            inputs={[
              { label: "He / him / his" },
              { label: "She / her / hers" },
              { label: "They / them / theirs" },
              { label: "Other (please specify)" },
              { label: "Prefer not to answer" },
            ]}
            setViewData={setDemographicFormData}
          />
          <DropDown
            value={demographicFormData.race}
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
            value={demographicFormData.sexuality}
            inputs={[
              { label: "Bisexual" },
              { label: "Cisgender" },
              { label: "Gay" },
              { label: "Heterosexual" },
              { label: "Lesbian" },
              { label: "Transgender" },
              { label: "Queer" },
              { label: "Other" },
              { label: "Prefer not to answer" },
            ]}
            setViewData={setDemographicFormData}
          />
          <SearchBox
            question='School'
            data={universityList.map(item => item.institution)}
            label='school'
            fieldState={demographicFormData.school}
            maxReturn={10}
            errorMessage={demographicFormData.schoolErr}
            handleChange={(value: string) => {
              setDemographicFormData(prev => ({
                ...prev,
                school: value,
              }))
            }}
          />
          <DropDown
            value={demographicFormData.collegeAffiliation}
            question='College Affiliation'
            errorMessage={demographicFormData.collegeAffiliationErr}
            inputs={[
              { label: "I am not a UCSC student" },
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
          <DropDown
            value={demographicFormData.eventLocation}
            errorMessage={demographicFormData.eventLocationErr}
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
            maxReturn={10}
            errorMessage={demographicFormData.majorErr}
            handleChange={(value: string) => {
              setDemographicFormData(prev => ({
                ...prev,
                major: value,
              }))
            }}
          />
          <DropDown
            question='Current Level of Study'
            value={demographicFormData.currentStanding}
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
            maxReturn={10}
            errorMessage={demographicFormData.countryErr}
            handleChange={(value: string) => {
              setDemographicFormData(prev => ({
                ...prev,
                country: value,
              }))
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default DemographicPage

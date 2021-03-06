import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import universityList from "views/Portal/utils/Universities"
import majors from "views/Portal/utils/Majors"
import Countries from "views/Portal/utils/Countries"
import DropDown from "../../FormInputs/DropDown"
import SearchBox from "../../FormInputs/SearchBox"
import NumberField from "../../FormInputs/NumberBox/index"
import CheckBox from "../../FormInputs/CheckBox/CheckBox"

const DemographicPage: React.FC = () => {
  const { demographicFormData, setDemographicFormData, setNewChanges } =
    useApplication()!
  const handleChange = (event: any) => {
    const name = event.target.getAttribute("name")
    if (Object.keys(demographicFormData).includes(name)) {
      const copy = { ...demographicFormData, [name]: event.target.value }
      setDemographicFormData(copy)
      setNewChanges()
    }
  }
  return (
    <div className='demographic-page-container'>
      <div className='demographic-page-container__questions'>
        <div className='demographic-page-container__title'>
          Demographics Information
        </div>
        <div className='demographic-page-container__fields'>
          <div className='demographic-page-container__field'>
            <NumberField
              name='Age *'
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDemographicFormData(prev => ({
                  ...prev,
                  age: e.target.value,
                }))
                setNewChanges()
              }}
              fieldState={demographicFormData.age}
              errorMessage={demographicFormData.ageErr}
              label='age'
              min={0}
              max={100}
            />
          </div>
          <div className='demographic-page-container__field'>
            <CheckBox
              errorMessage={demographicFormData.pronounsErr}
              question='Pronouns *'
              name='pronouns'
              value={demographicFormData.pronouns}
              inputs={[
                { label: "He / him / his" },
                { label: "She / her / hers" },
                { label: "They / them / theirs" },
                { label: "Prefer not to answer" },
              ]}
              maxLength={50}
              setViewData={(data: any) => {
                setDemographicFormData(data)
                setNewChanges()
              }}
            />
          </div>
          <div className='demographic-page-container__field'>
            <DropDown
              value={demographicFormData.race}
              question='Race / Ethnicity *'
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
          </div>
          <div className='demographic-page-container__field'>
            <CheckBox
              errorMessage={demographicFormData.sexualityErr}
              question='Sexuality / Gender Identity *'
              name='sexuality'
              value={demographicFormData.sexuality}
              inputs={[
                { label: "Bisexual" },
                { label: "Cisgender" },
                { label: "Gay" },
                { label: "Heterosexual" },
                { label: "Lesbian" },
                { label: "Transgender (including nonbinary)" },
                { label: "Queer" },
                { label: "Prefer not to answer" },
              ]}
              maxLength={50}
              setViewData={(data: any) => {
                setDemographicFormData(data)
                setNewChanges()
              }}
            />
          </div>
          <div className='demographic-page-container__field'>
            <SearchBox
              question='School *'
              data={universityList.map(item => item.institution)}
              label='school'
              fieldState={demographicFormData.school}
              maxReturn={10}
              maxLength={100}
              errorMessage={demographicFormData.schoolErr}
              handleChange={(value: string) => {
                setDemographicFormData(prev => ({
                  ...prev,
                  school: value,
                }))
                setNewChanges()
              }}
            />
          </div>
          <div className='demographic-page-container__field'>
            <DropDown
              value={demographicFormData.collegeAffiliation}
              question='College Affiliation *'
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
                { label: "Rachel Carson College" },
                { label: "Stevenson" },
                {
                  label: "I am a UCSC grad student with no college affiliation",
                },
              ]}
              name='collegeAffiliation'
              handleChange={handleChange}
            />
          </div>
          <div className='demographic-page-container__field'>
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
          </div>
          <div className='demographic-page-container__field'>
            <SearchBox
              question='Major *'
              data={majors.map(item => item.major)}
              label='major'
              fieldState={demographicFormData.major}
              maxReturn={10}
              maxLength={50}
              errorMessage={demographicFormData.majorErr}
              handleChange={(value: string) => {
                setDemographicFormData(prev => ({
                  ...prev,
                  major: value,
                }))
                setNewChanges()
              }}
            />
          </div>
          <div className='demographic-page-container__field'>
            <DropDown
              question='Current Level of Study *'
              value={demographicFormData.currentStanding}
              errorMessage={demographicFormData.currentStandingErr}
              inputs={[
                { label: "High School" },
                { label: "Bachelors" },
                { label: "Masters" },
                { label: "PhD" },
                { label: "Other" },
              ]}
              name='currentStanding'
              handleChange={handleChange}
            />
          </div>
          <div className='demographic-page-container__field'>
            <NumberField
              name='Graduation Year *'
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDemographicFormData(prev => ({
                  ...prev,
                  graduation: e.target.value,
                }))
              }}
              fieldState={demographicFormData.graduation}
              errorMessage={demographicFormData.graduationErr}
              label='graduationYear'
              min={1950}
              max={2050}
            />
          </div>
          <div className='demographic-page-container__field'>
            <SearchBox
              question='Country *'
              data={Countries.map(item => item.name)}
              label='country'
              fieldState={demographicFormData.country}
              maxReturn={10}
              maxLength={50}
              errorMessage={demographicFormData.countryErr}
              handleChange={(value: string) => {
                setDemographicFormData(prev => ({
                  ...prev,
                  country: value,
                }))
                setNewChanges()
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default DemographicPage

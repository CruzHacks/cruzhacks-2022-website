import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import universityList from "views/Portal/utils/Universities"
import majors from "views/Portal/utils/Majors"
import Countries from "views/Portal/utils/Countries"
// import TextField from "../../FormInputs/TextField"
import RadioForm from "../../FormInputs/Radio"
import DropDown from "../../FormInputs/DropDown"
import SearchBox from "../../FormInputs/SearchBox"
import NumberField from "../../FormInputs/NumberBox/index"

const DemographicPage: React.FC = () => {
  const { demographicFormData, setDemographicFormData } = useApplication()!
  const handleChange = (event: any) => {
    const name = event.target.getAttribute("aria-label")
    if (Object.keys(demographicFormData).includes(name)) {
      const copy = { ...demographicFormData, [name]: event.target.value }
      setDemographicFormData(copy)
    }
  }
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
          <RadioForm
            errorMessage={undefined}
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
            checkedState={() => {}}
          />
          <DropDown
            question='Race / Ethnicity'
            errorMessage={undefined}
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
          <RadioForm
            errorMessage={undefined}
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
            checkedState={() => {}}
          />
          <SearchBox
            className='demographic-page__form-container__inputs'
            question='School'
            name='school'
            items={universityList.map(x => x.institution)}
            handleSelection={handleChange}
            maxLength={100}
            maxReturn={100}
          />
          <DropDown
            errorMessage={undefined}
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
            className='demographic-page__form-container__inputs'
            question='Major'
            name='major'
            items={majors.map(x => x.major)}
            handleSelection={handleChange}
            maxLength={100}
            maxReturn={25}
          />
          <DropDown
            question='Current Level of Study'
            errorMessage={undefined}
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
            className='demographic-page__form-container__inputs'
            question='Country'
            name='major'
            items={Countries.map(x => x.name)}
            handleSelection={handleChange}
            maxLength={100}
            maxReturn={10}
          />
        </div>
      </div>
    </div>
  )
}
export default DemographicPage

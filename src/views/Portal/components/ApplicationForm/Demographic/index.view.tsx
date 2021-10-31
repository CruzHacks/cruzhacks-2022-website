import React from "react"
import "./index.scss"
import TextField from "../../FormInputs/TextField"
import RadioForm from "../../FormInputs/Radio"
// import DropDown from "../../FormInputs/DropDown"

const DemographicPage: React.FC = () => (
  <div className='demographic-page'>
    <div className='demographic-page--title'>Demographics</div>
    <div className='demographic-page__inputs'>
      <TextField
        className='demographic-page__inputs--textfield'
        name='age'
        handleChange={() => {}}
        fieldState=''
        errorMessage=''
        label='age'
        maxLength={3}
      />
      <RadioForm
        question='Pronouns'
        name='pronouns'
        inputs={[
          { label: "He / him / his" },
          { label: "She / her / hers" },
          { label: "They / them / theirs" },
          { label: "Other" },
          { label: "Prefer not to answer" },
        ]}
        handleChange=''
        checkedState='state'
      />
    </div>
  </div>
)

export default DemographicPage

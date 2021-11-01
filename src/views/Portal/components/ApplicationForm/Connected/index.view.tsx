import React from "react"
import "./index.scss"
import TextField from "../../FormInputs/TextField"
import TextBox from "../../FormInputs/TextBox"
import RadioForm from "../../FormInputs/Radio"
// import DropDown from "../../FormInputs/DropDown"
// import SearchBox from "../../FormInputs/SearchBox"

const ConnectedPage: React.FC = () => {
  // placeholder
  const handleChange = () => {}
  const errors = ""
  return (
    <div className='connected-page'>
      <div className='connected-page__container'>
        <div className='connected-page__container--title'>Get Connected</div>
        <div className='connected-page__container--info'>
          Want to share your resume with our sponsors? Fill out our resume drop
          form here.
        </div>
        <div className='connected-page__container--body'>
          <TextField
            className='connected-page__container--textfield'
            name='LinkedIn'
            label='LinkedIn'
            maxLength={50}
            handleChange={handleChange}
            fieldState={undefined}
            errorMessage={errors}
          />
          <TextField
            className='connected-page__container--textfield'
            name='GitHub'
            label='GitHub'
            maxLength={100}
            handleChange={handleChange}
            fieldState={undefined}
            errorMessage={errors}
          />
          <TextBox
            className='connected-page__container--textbox'
            label='Reference'
            name='How did you hear about CruzHacks? If someone specific referred you, let us know their name so they can earn CruzCoins!'
            maxLength={100}
            handleChange={handleChange}
            fieldState={undefined}
            errorMessage={errors}
          />
          <RadioForm
            question='Are you part of CruzCoins? And if not, would you like to register?'
            name='CruzCoins Interest'
            inputs={[{ label: "Yes" }, { label: "No" }]}
            handleChange={handleChange}
            checkedState={() => {}}
            errorMessage=''
          />
          <TextBox
            className='connected-page__container--textbox'
            label='OtherInfo'
            name='Is there anything else you would like us to know?'
            maxLength={100}
            handleChange={handleChange}
            fieldState={undefined}
            errorMessage={errors}
          />
        </div>
      </div>
    </div>
  )
}

export default ConnectedPage

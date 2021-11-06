import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import TextField from "../../FormInputs/TextField"
import TextBox from "../../FormInputs/TextBox"
import FileUpload from "../../FormInputs/FileUpload"

const ConnectedPage: React.FC = () => {
  const { connectedFormData, setConnectedFormData } = useApplication()!
  const handleChange = (event: any) => {
    const name = event.target.getAttribute("name")
    if (Object.keys(connectedFormData).includes(name)) {
      const copy = { ...connectedFormData, [name]: event.target.value }
      setConnectedFormData(copy)
    }
  }
  return (
    <div className='connected-page'>
      <div className='connected-page__container'>
        <div className='connected-page__container--title'>Get Connected</div>
        <FileUpload
          question='Want to share your resume with our sponsors? Upload your pdf resume here.'
          errorMessage={connectedFormData.resumeErr}
          handleChange={setConnectedFormData}
          name='resume'
          className='none'
        />
        <div className='connected-page__container--body'>
          <TextField
            name='LinkedIn'
            label='linkedin'
            maxLength={50}
            handleChange={handleChange}
            fieldState={connectedFormData.linkedin}
            errorMessage={connectedFormData.linkedinErr}
          />
          <TextField
            name='GitHub'
            label='github'
            maxLength={100}
            handleChange={handleChange}
            fieldState={connectedFormData.github}
            errorMessage={connectedFormData.githubErr}
          />
          <TextBox
            // className='connected-page__container--textbox'
            label='cruzCoins'
            name='How did you hear about CruzHacks? If someone specific referred you, let us know their name so they can earn CruzCoins!'
            maxLength={100}
            handleChange={handleChange}
            fieldState={connectedFormData.cruzCoins}
            errorMessage={connectedFormData.cruzCoinsErr}
          />
          {/* <RadioForm
            question='Are you part of CruzCoins? And if not, would you like to register?'
            name='CruzCoins Interest'
            inputs={[{ label: "Yes" }, { label: "No" }]}
            handleChange={handleChange}
            checkedState={() => {}}
            errorMessage={errors}
          /> */}
          <div className='connected-page__container--info'>
            Are you part of CruzCoins? And if not, would you like to register?
          </div>
          <TextBox
            label='anythingElse'
            name='Is there anything else you would like us to know?'
            maxLength={100}
            handleChange={handleChange}
            fieldState={connectedFormData.anythingElse}
            errorMessage={connectedFormData.anythingElseErr}
          />
        </div>
      </div>
    </div>
  )
}

export default ConnectedPage

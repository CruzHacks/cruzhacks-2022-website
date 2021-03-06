import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import TextField from "../../FormInputs/TextField"
import TextBox from "../../FormInputs/TextBox"
import FileUpload from "../../FormInputs/FileUpload"

const ConnectedPage: React.FC = () => {
  const { connectedFormData, setConnectedFormData, setNewChanges } =
    useApplication()!
  const handleChange = (event: any) => {
    const name = event.target.getAttribute("name")
    if (Object.keys(connectedFormData).includes(name)) {
      const copy = { ...connectedFormData, [name]: event.target.value }
      setConnectedFormData(copy)
      setNewChanges()
    }
  }
  return (
    <div className='connected-page-container'>
      <div className='connected-page-container__questions'>
        <div className='connected-page-container__title'>Get Connected</div>
        <div className='connected-page-container__fields'>
          <div className='connected-page-container__field'>
            <FileUpload
              question='Want to share your resume with our sponsors? Upload your pdf resume here.'
              handleChange={setConnectedFormData}
              errorMessage={connectedFormData.resumeErr}
              name='resume'
              className='none'
              fieldState={connectedFormData.resume}
            />
          </div>
          <div className='connected-page-container__field'>
            <TextField
              name='LinkedIn'
              label='linkedin'
              maxLength={50}
              handleChange={handleChange}
              fieldState={connectedFormData.linkedin}
              errorMessage={connectedFormData.linkedinErr}
            />
          </div>
          <div className='connected-page-container__field'>
            <TextField
              name='GitHub'
              label='github'
              maxLength={100}
              handleChange={handleChange}
              fieldState={connectedFormData.github}
              errorMessage={connectedFormData.githubErr}
            />
          </div>
          <div className='connected-page-container__field'>
            <TextBox
              // className='connected-page__container--textbox'
              label='cruzCoins'
              name='How did you hear about CruzHacks? If someone specific referred you, let us know their name so they can earn CruzCoins!'
              maxLength={100}
              handleChange={handleChange}
              fieldState={connectedFormData.cruzCoins}
              errorMessage={connectedFormData.cruzCoinsErr}
              className='__small'
            />
          </div>
          <div className='connected-page-container__field'>
            <div className='connected-page-container__info'>
              Are you part of CruzCoins? And if not, would you like to{" "}
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSey0GQ8to9yKCwu0qrpR8bp79pgwk5on0B3biGWN6ET27yTXQ/viewform'
                target='_blank'
                rel='noreferrer'
              >
                register
              </a>
              ?
            </div>
          </div>
          <div className='connected-page-container__field'>
            <TextBox
              label='anythingElse'
              name='Is there anything else you would like us to know?'
              maxLength={100}
              handleChange={handleChange}
              fieldState={connectedFormData.anythingElse}
              errorMessage={connectedFormData.anythingElseErr}
              className='__medium'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectedPage

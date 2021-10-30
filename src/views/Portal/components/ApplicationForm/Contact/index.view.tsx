import React from "react"
import "./index.scss"
import { useAuth0 } from "@auth0/auth0-react"
import TextField from "../../FormInputs/TextField"

// TO DO:
// --ContactPage: 
//     should take props from ApplicationForm to handleChange/ elevate state to ApplicationForm
//
// --Possibly refactor:
//     TextField into an array and render via array.map()
//
// --More Styling
//
// --Form Validation and error handling
//

const ContactPage: React.FC = () => {
  const { user } = useAuth0()
  const email = user === undefined || user.email === undefined ? "" : user.email

  return (
    <div className='contact-page'>
      <div className='contact-page__container'>
        <div className='contact-page__container--title'>
          Contact Information
        </div>
        <div className='contact-page__container--fields'>
          <TextField
            className='contact-page__container--textfield'
            name='First Name'
            handleChange={() => {}}
            fieldState=''
            errorMessage=''
            label='First Name'
            maxLength={25}
          />
          <TextField
            className='contact-page__container--textfield'
            name='Last Name'
            handleChange={() => {}}
            fieldState=''
            errorMessage=''
            label='Last Name'
            maxLength={25}
          />
          <TextField
            className='contact-page__container--textfield'
            name='Phone Number'
            handleChange={() => {}}
            fieldState=''
            errorMessage=''
            label='Phone Number'
            maxLength={10}
          />
          <TextField
            className='contact-page__container--textfield'
            name='Email Address'
            handleChange={() => {}}
            fieldState={email}
            errorMessage=''
            label='Email Address'
            maxLength={50}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage

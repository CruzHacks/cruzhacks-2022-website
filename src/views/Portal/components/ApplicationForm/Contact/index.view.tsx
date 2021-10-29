import React from "react"
import "./index.scss"
import { useAuth0 } from "@auth0/auth0-react"
import TextField from "../../FormInputs/TextField"

const ContactPage: React.FC = () => {
  const { user } = useAuth0()
  const email = user === undefined || user.email === undefined ? "" : user.email

  return (
    <div className='contact-page'>
      Contact Information
      <TextField
        name='First Name'
        handleChange={() => {}}
        fieldState=''
        errorMessage=''
        label='First Name'
        maxLength={25}
      />
      <TextField
        name='Last Name'
        handleChange={() => {}}
        fieldState=''
        errorMessage=''
        label='Last Name'
        maxLength={25}
      />
      <TextField
        name='Phone Number'
        handleChange={() => {}}
        fieldState=''
        errorMessage=''
        label='Phone Number'
        maxLength={10}
      />
      <TextField
        name='Email Address'
        handleChange={() => {}}
        fieldState={email}
        errorMessage=''
        label='Email Address'
        maxLength={50}
      />
    </div>
  )
}

export default ContactPage

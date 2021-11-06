import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import TextField from "../../FormInputs/TextField"

const ContactPage: React.FC = () => {
  const { contactFormData, setContactFormData } = useApplication()!
  const handleChange = (event: any) => {
    const name = event.target.getAttribute("name")
    if (Object.keys(contactFormData).includes(name)) {
      const copy = { ...contactFormData, [name]: event.target.value }
      setContactFormData(copy)
    }
  }
  return (
    <div className='contact-page'>
      <div className='contact-page__container'>
        <div className='contact-page__container--title'>
          Contact Information
        </div>
        <div className='contact-page__container--fields'>
          <TextField
            name='First Name'
            handleChange={handleChange}
            fieldState={contactFormData.fname}
            errorMessage={contactFormData.fnameErr}
            label='fname'
            maxLength={25}
          />
          <TextField
            name='Last Name'
            handleChange={handleChange}
            fieldState={contactFormData.lname}
            errorMessage={contactFormData.lnameErr}
            label='lname'
            maxLength={25}
          />
          <TextField
            name='Phone Number'
            handleChange={handleChange}
            fieldState={contactFormData.phone}
            errorMessage={contactFormData.phoneErr}
            label='phone'
            maxLength={10}
          />
          <TextField
            name='Email Address'
            handleChange={handleChange}
            fieldState={contactFormData.email}
            errorMessage={contactFormData.emailErr}
            label='email'
            maxLength={50}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage

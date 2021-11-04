import React from "react"
import "./index.scss"
import { useApplication } from "components/ApplicationContext/ApplicationContext"
import TextField from "../../FormInputs/TextField"

const ContactPage: React.FC = () => {
  const { contactFormData, setContactFormData } = useApplication()!
<<<<<<< HEAD
  const handleChange = (event: any) => {
    const name = event.target.getAttribute("name")
=======

  const handleChange = (event: any) => {
    const name = event.target.getAttribute("aria-label")
>>>>>>> 14f5af27284da2eb9b4e2ff2b88b74e94a4cf981
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
            className='contact-page__container--textfield'
            name='First Name'
            handleChange={handleChange}
            fieldState={contactFormData.fname}
            errorMessage={contactFormData.fnameErr}
            label='fname'
            maxLength={25}
          />
          <TextField
            className='contact-page__container--textfield'
            name='Last Name'
            handleChange={handleChange}
            fieldState={contactFormData.lname}
            errorMessage={contactFormData.lnameErr}
            label='lname'
            maxLength={25}
          />
          <TextField
            className='contact-page__container--textfield'
            name='Phone Number'
            handleChange={handleChange}
            fieldState={contactFormData.phone}
            errorMessage={contactFormData.phoneErr}
            label='phone'
            maxLength={10}
          />
          <TextField
            className='contact-page__container--textfield'
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

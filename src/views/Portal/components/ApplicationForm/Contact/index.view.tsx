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
    <div className='contact-page-container'>
      <div className='contact-page-container__questions'>
        <div className='contact-page-container__title'>Contact Information</div>
        <div className='contact-page-container__fields'>
          <div className='contact-page-container__field'>
            <TextField
              name='First Name'
              handleChange={handleChange}
              fieldState={contactFormData.fname}
              errorMessage={contactFormData.fnameErr}
              label='fname'
              maxLength={25}
            />
          </div>
          <div className='contact-page-container__field'>
            <TextField
              name='Last Name'
              handleChange={handleChange}
              fieldState={contactFormData.lname}
              errorMessage={contactFormData.lnameErr}
              label='lname'
              maxLength={25}
            />
          </div>
          <div className='contact-page-container__field'>
            <TextField
              name='Phone Number'
              handleChange={handleChange}
              fieldState={contactFormData.phone}
              errorMessage={contactFormData.phoneErr}
              label='phone'
              maxLength={20}
            />
          </div>
          <div className='contact-page-container__field'>
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
    </div>
  )
}

export default ContactPage

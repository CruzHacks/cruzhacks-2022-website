import React from "react"
import "./index.scss"
import { ContactHandlers } from "Props/application/props"
import TextField from "../../FormInputs/TextField"

// TO DO:
// --Possibly refactor:
//     TextField into an array and render via array.map()
//
//
// --Form Validation and error handling
//

const ContactPage: React.FC<ContactHandlers> = ({
  parentState,
  setParentState,
  validationErrors,
}: ContactHandlers) => {
  const handleChange = (event: any) => {
    const name = event.target.getAttribute("aria-label")
    if (Object.keys(parentState).includes(name)) {
      const copy = { ...parentState, [name]: event.target.value }
      setParentState(copy)
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
            fieldState={parentState.fname}
            errorMessage={validationErrors.fname}
            label='fname'
            maxLength={25}
          />
          <TextField
            className='contact-page__container--textfield'
            name='Last Name'
            handleChange={handleChange}
            fieldState={parentState.lname}
            errorMessage={validationErrors.lname}
            label='lname'
            maxLength={25}
          />
          <TextField
            className='contact-page__container--textfield'
            name='Phone Number'
            handleChange={handleChange}
            fieldState={parentState.phone}
            errorMessage={validationErrors.phone}
            label='phone'
            maxLength={10}
          />
          <TextField
            className='contact-page__container--textfield'
            name='Email Address'
            handleChange={handleChange}
            fieldState={parentState.email}
            errorMessage={validationErrors.email}
            label='email'
            maxLength={50}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage

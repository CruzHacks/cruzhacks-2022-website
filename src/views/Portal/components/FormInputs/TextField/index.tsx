import React from "react"
import { FieldProps } from "Props/props"
import "./index.scss"

const TextField: React.FC<FieldProps> = ({
  name,
  handleChange,
  fieldState,
  errorMessage,
  label,
  maxLength,
}: FieldProps) => (
  <div className='textField__component'>
    <div className='textField__component--fieldName'>{name}</div>
    <div className='textField__component--errorMessage'>{errorMessage}</div>
    <input
      type='text'
      aria-label={label}
      name={label}
      value={fieldState}
      maxLength={maxLength}
      onChange={handleChange}
      className='textField__component--input'
    />
  </div>
)

export default TextField

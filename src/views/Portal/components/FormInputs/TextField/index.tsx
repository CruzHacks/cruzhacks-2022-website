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
  disabled,
}: FieldProps) => (
  <div className='text-field-component'>
    <div className='text-field-component__fieldName'>{name}</div>
    <div className='text-field-component__errorMessage'>{errorMessage}</div>
    <input
      type='text'
      aria-label={label}
      name={label}
      value={fieldState}
      maxLength={maxLength}
      onChange={handleChange}
      className={`text-field-component__input ${
        errorMessage ? "text-field-component__error" : ""
      }`}
      disabled={disabled}
    />
  </div>
)

TextField.defaultProps = {
  disabled: false,
}

export default TextField

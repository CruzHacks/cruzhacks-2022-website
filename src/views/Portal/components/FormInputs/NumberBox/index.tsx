import React from "react"
import { NumberFieldProps } from "Props/props"
import "./index.scss"

const NumberField: React.FC<NumberFieldProps> = ({
  name,
  handleChange,
  fieldState,
  errorMessage,
  label,
  min,
  max,
  maxLength,
}: NumberFieldProps) => (
  <div className='number-field-component'>
    <div className='number-field-component__fieldName'>{name}</div>
    <div className='number-field-component__errorMessage'>{errorMessage}</div>
    <input
      type='number'
      aria-label={label}
      name={label}
      value={fieldState}
      min={min}
      max={max}
      maxLength={maxLength}
      onChange={handleChange}
      className={`number-field-component__input ${
        errorMessage ? "number-field-component__error" : ""
      }`}
    />
  </div>
)

export default NumberField

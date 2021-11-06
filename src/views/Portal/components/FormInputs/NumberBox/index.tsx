import React from "react"
import { NumberFieldProps } from "Props/props"

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
  <div className='textField__component'>
    <div className='textField__component--fieldName'>{name}</div>
    <div className='textField__component--errorMessage'>{errorMessage}</div>
    <input
      type='number'
      aria-label={label}
      name={label}
      value={fieldState}
      min={min}
      max={max}
      maxLength={maxLength}
      onChange={handleChange}
      className='textField__component--input'
    />
  </div>
)

export default NumberField

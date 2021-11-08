import React from "react"
import { RadioButtonProps, RadioFormProps } from "Props/props"
import "./index.scss"

const RadioForm: React.FC<RadioFormProps> = ({
  question,
  inputs,
  name,
  handleChange,
  errorMessage,
  value,
}: RadioFormProps) => (
  <div className='radio-form-component'>
    <div className='radio-form-component__fieldName'>{question}</div>
    <div className='radio-form-component__errorMessage'>{errorMessage}</div>
    <div className='radio-form-component__inputs'>
      {inputs.map(({ label }: RadioButtonProps) => (
        <div className='radio-form-component__radio-wrapper'>
          <input
            type='radio'
            onChange={handleChange}
            id={label}
            value={label}
            name={name}
            checked={value === label}
            className='radio-form-component__radio'
          />
          <label htmlFor={label}>{label}</label>
        </div>
      ))}
    </div>
  </div>
)
export default RadioForm

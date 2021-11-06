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
  <div className='radio-form'>
    <div className='radio-form__question'>{question}</div>
    <div className='radio-form__error'>{errorMessage}</div>
    <div className='radio-form__inputs'>
      {inputs.map(({ label }: RadioButtonProps) => (
        <div className='radio-form__inputs--radio-button' key={label}>
          <input
            type='radio'
            onChange={handleChange}
            value={label}
            name={name}
            checked={value === label}
          />
          {label}
        </div>
      ))}
    </div>
  </div>
)
export default RadioForm

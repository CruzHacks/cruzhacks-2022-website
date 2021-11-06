import React from "react"
import { RadioButtonProps, RadioFormProps } from "Props/props"
import "./index.scss"

const RadioForm: React.FC<RadioFormProps> = ({
  question,
  inputs,
  name,
  handleChange,
  errorMessage,
}: RadioFormProps) => (
  <div className='radio-form__component'>
    <div className='radio-form__component--question'>{question}</div>
    <div className='radio-form__component--error'>{errorMessage}</div>
    <div className='radio-form__component--inputs'>
      {inputs.map(({ label }: RadioButtonProps) => (
        <div className='radio-form__component--inputs__radio-button'>
          <input
            type='radio'
            onChange={handleChange}
            value={label}
            name={name}
            className='radio-form__component--inputs__radio-button--input'
          />
          {label}
        </div>
      ))}
    </div>
  </div>
)
export default RadioForm

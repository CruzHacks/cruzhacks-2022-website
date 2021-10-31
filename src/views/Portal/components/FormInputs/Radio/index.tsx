import React from "react"
import { RadioButtonProps, RadioFormProps } from "Props/props"
import "./index.scss"

const RadioForm: React.FC<RadioFormProps> = ({
  question,
  inputs,
  name,
  handleChange,
}: RadioFormProps) => (
  <div className='radio-form'>
    <div className='question'>{question}</div>
    <div className='inputs'>
      {inputs.map(({ label }: RadioButtonProps) => (
        <div className='radio-button'>
          <input
            type='radio'
            onChange={handleChange}
            value={label}
            name={name}
          />
          {label}
        </div>
      ))}
    </div>
  </div>
)
export default RadioForm

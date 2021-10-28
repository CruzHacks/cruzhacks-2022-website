import React from "react"
import { RadioButtonProps, RadioFormProps } from "Props/props"
import "./index.scss"

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
}: RadioButtonProps) => (
  <div className='radio-button'>
    <input type='radio' value='male' name={name} />
    {label}
  </div>
)

const RadioForm: React.FC<RadioFormProps> = ({
  question,
  inputs,
  name,
}: RadioFormProps) => (
  <div className='radio-form'>
    <div className='question'>{question}</div>
    <div className='inputs'>
      {inputs.map(({ label }: RadioButtonProps) => (
        <RadioButton label={label} name={name} />
      ))}
    </div>
  </div>
)
export default RadioForm

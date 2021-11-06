import React from "react"
import "./index.scss"

interface CheckBoxProps {
  question: string
  errorMessage: string
  inputs: { label: string }[]
  name: string
  handleChange: any
}

const CheckBox: React.FC<CheckBoxProps> = ({
  question,
  errorMessage,
  inputs,
  name,
  handleChange,
}: CheckBoxProps) => (
  <div className='checkbox__component'>
    <div className='checkbox__component--question'>{question}</div>
    <div className='checkbox__component--errorMessage'>{errorMessage}</div>
    <div className='checkbox__component--inputContainer'>
      {inputs.map(({ label }) => (
        <div className='checkbox__component--button'>
          <input
            type='checkbox'
            onChange={handleChange}
            value={label}
            name={name}
            className='checkbox__component--input'
          />
          <div className='checkbox__component--label'>{label}</div>
        </div>
      ))}
    </div>
  </div>
)
export default CheckBox

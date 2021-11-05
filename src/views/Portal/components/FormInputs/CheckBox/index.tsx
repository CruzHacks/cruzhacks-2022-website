import React from "react"

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
  <div className='checkbox-form'>
    <div className='checkbox-form__question'>{question}</div>
    <div className='checkbox-form__errorMessage'>{errorMessage}</div>
    <div className='inputs'>
      {inputs.map(({ label }) => (
        <div className='checkbox-button'>
          <input
            type='checkbox'
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
export default CheckBox

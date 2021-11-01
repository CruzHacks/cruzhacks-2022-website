import React from "react"

interface CheckBoxProps {
  question: string
  inputs: { label: string }[]
  name: string
  handleChange: any
}

const CheckBox: React.FC<CheckBoxProps> = ({
  question,
  inputs,
  name,
  handleChange,
}: CheckBoxProps) => (
  <div className='checkbox-form'>
    <div className='question'>{question}</div>
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

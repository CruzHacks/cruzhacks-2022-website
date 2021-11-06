import React, { useState } from "react"
import "./index.scss"

interface CheckBoxProps {
  question: string
  errorMessage: string
  inputs: { label: string }[]
  name: string
  value: string[]
  setViewData: any
}

const CheckBox: React.FC<CheckBoxProps> = ({
  question,
  errorMessage,
  inputs,
  name,
  setViewData,
  value,
}: CheckBoxProps) => {
  const [viewSelected, setViewSelected] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    const newArr = isChecked
      ? [...value, e.target.value]
      : value.filter(arr => arr !== e.target.value)
    setViewData((prev: any) => ({
      ...prev,
      [name]: newArr,
    }))
  }
  return (
    <div className='checkbox-form'>
      <div className='checkbox-form__question'>{question}</div>
      <div className='checkbox-form__errorMessage'>{errorMessage}</div>
      <button type='button' onClick={() => setViewSelected(!viewSelected)}>
        <div className='checkbox-form__selected'>
          {value.length === 0
            ? "Select"
            : value.map((selected: string) => (
                <div className='checkbox-form__selected_option' key={selected}>
                  {selected}
                </div>
              ))}
        </div>
      </button>
      {viewSelected && (
        <div className='checkbox-form__inputs'>
          {inputs.map(({ label }) => (
            <div className='checkbox-button' key={label}>
              <input
                type='checkbox'
                onChange={handleChange}
                value={label}
                name={name}
                defaultChecked={value.includes(label)}
              />
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default CheckBox

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
    <div className='checkbox-component'>
      <div className='checkbox-component__question'>{question}</div>
      <div className='checkbox-component__errorMessage'>{errorMessage}</div>
      <button
        type='button'
        className={`checkbox-component__input ${
          errorMessage ? "checkbox-component__error" : ""
        }`}
        onClick={() => setViewSelected(!viewSelected)}
      >
        <div className='checkbox-component__selected-options'>
          {value.length === 0
            ? " "
            : value.map((selected: string) => (
                <div
                  className='checkbox-component__selected-option'
                  key={selected}
                >
                  {selected}
                </div>
              ))}
        </div>
      </button>
      {viewSelected && (
        <div className='checkbox-component__inputs'>
          {inputs.map(({ label }) => (
            <div className='checkbox-component__options' key={label}>
              <div>
                <input
                  type='checkbox'
                  onChange={handleChange}
                  value={label}
                  name={name}
                  defaultChecked={value.includes(label)}
                  className='checkbox-component__option'
                />
              </div>
              <div>{label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default CheckBox

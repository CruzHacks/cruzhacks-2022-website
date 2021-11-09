import React, { useState } from "react"
import "./CheckBox.scss"

interface CheckBoxProps {
  question: string
  errorMessage: string
  inputs: { label: string }[]
  name: string
  value: string[]
  setViewData: any
  maxLength: number
}

const CheckBox: React.FC<CheckBoxProps> = ({
  question,
  errorMessage,
  inputs,
  name,
  setViewData,
  value,
  maxLength,
}: CheckBoxProps) => {
  const [input, setInput] = useState<string>("")

  const addData = (e: any) => {
    if (e.keyCode === 13) {
      const newArr = [...value, input]
      //   newArr.filter(function (item, index, inputArray) {
      //     return inputArray.indexOf(item) == index
      //   })
      setViewData((prev: any) => ({
        ...prev,
        [name]: newArr.filter(
          (item, index, inputArray) => inputArray.indexOf(item) === index
        ),
      }))
      setInput("")
    }
  }

  const addButtonData = (selected: string) => {
    const newArr = [...value, selected]
    setViewData((prev: any) => ({
      ...prev,
      [name]: newArr,
    }))
    setInput("")
  }

  const removeData = (selected: string) => {
    const newArr = value.filter(arr => arr !== selected)
    setViewData((prev: any) => ({
      ...prev,
      [name]: newArr,
    }))
  }

  const dropdown = () => (
    <div className='check-box-component__dropdown'>
      {input &&
        inputs
          .filter(({ label }) => !value.includes(label))
          .map(({ label }) => (
            <div
              className='check-box-component__dropdown-button-container'
              key={label}
            >
              <button
                type='button'
                onClick={() => addButtonData(label)}
                aria-label={label}
                className='check-box-component__dropdown-button'
              >
                {label}
              </button>
            </div>
          ))}
    </div>
  )
  return (
    <div className='check-box-component'>
      <div className='check-box-component__question'>{question}</div>
      <div className='check-box-component__errorMessage'>{errorMessage}</div>
      <div className='check-box-component__inputs'>
        <div className='check-box-component__inputs-button'>
          {value.length === 0
            ? " "
            : value.map((selected: string) => (
                <button
                  type='button'
                  className='check-box-component__selected-option'
                  key={selected}
                  onClick={() => removeData(selected)}
                >
                  {selected}
                </button>
              ))}
        </div>
        <div className='check-box-component__input-container'>
          <input
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={addData}
            maxLength={maxLength}
            className={
              errorMessage
                ? "check-box-component__input width error"
                : "check-box-component__input width"
            }
          />
        </div>
      </div>
      {input === "" ? "" : dropdown()}
    </div>
  )
}

export default CheckBox

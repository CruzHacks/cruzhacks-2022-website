import React, { useState } from "react"
import { DropDownProps } from "Props/props"
import "./index.scss"

const DropDown: React.FC<DropDownProps> = ({
  question,
  inputs,
}: DropDownProps) => {
  const [isInvisible, setIsVisible] = useState(false)
  const [active, setActive] = useState("select")
  return (
    <div className='dropdown'>
      <div className='dropdown__question'>{question}</div>
      <div className='dropdown__wrapper'>
        <button
          type='button'
          className='dropdown__wrapper__button'
          onClick={() => setIsVisible(!isInvisible)}
        >
          {active}
        </button>
      </div>
      <ul className='dropdown__select'>
        {inputs.map(({ label }) => (
          <li
            value={label}
            className={`dropdown--items ${
              isInvisible ? "dropdown--invisible" : ""
            }`}
          >
            <button
              className='dropdown--items--opt'
              type='button'
              onClick={() => setActive(`${label}`)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDown

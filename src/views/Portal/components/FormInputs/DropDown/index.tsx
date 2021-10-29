import React from "react"
import { DropDownProps } from "Props/props"
import "./index.scss"

const DropDown: React.FC<DropDownProps> = ({
  question,
  inputs,
}: DropDownProps) => (
  <div className='dropdown'>
    <div className='dropdown__question'>{question}</div>
    <form>
      <select className='dropdown__select'>
        {inputs.map(({ label }) => (
          <option value={label}>{label}</option>
        ))}
      </select>
    </form>
  </div>
)

export default DropDown

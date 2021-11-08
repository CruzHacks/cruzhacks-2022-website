import React from "react"
import { DropDownProps } from "Props/props"
import "./index.scss"

const DropDown: React.FC<DropDownProps> = ({
  question,
  inputs,
  name,
  handleChange,
  errorMessage,
  value,
}: DropDownProps) => (
  // const [isInvisible, setIsVisible] = useState(false)
  <div className='dropdown-component'>
    <div className='dropdown-component__question'>{question}</div>
    <div className='dropdown-component__errorMessage'>{errorMessage}</div>
    <select
      className={`dropdown-component__selector ${
        errorMessage ? "dropdown-component__error" : ""
      }`}
      name={name}
      onChange={handleChange}
      value={value}
    >
      <option value='' className='dropdown-component__option'>
        {" "}
      </option>
      {inputs.map(({ label }) => (
        <option value={label} className='dropdown-component__option'>
          {label}
        </option>
      ))}
    </select>
  </div>
)

export default DropDown

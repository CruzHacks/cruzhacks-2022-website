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
  <div className='dropdown__component'>
    <div className='dropdown__component--question'>{question}</div>
    <div className='dropdown__component--errorMessage'>{errorMessage}</div>
    <select
      className='dropdown__component--selector'
      name={name}
      onChange={handleChange}
      value={value}
    >
      <option value='' className='dropdown__component--option'>
        {" "}
      </option>
      {inputs.map(({ label }) => (
        <option value={label} className='dropdown__component--option'>
          {label}
        </option>
      ))}
    </select>
  </div>
)

export default DropDown

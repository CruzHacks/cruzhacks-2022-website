import React from "react"
import { DropDownProps } from "Props/props"
import "./index.scss"

const DropDown: React.FC<DropDownProps> = ({
  question,
  inputs,
  name,
  handleChange,
}: DropDownProps) => (
  // const [isInvisible, setIsVisible] = useState(false)
  <div className='dropdown'>
    <div className='dropdown__question'>{question}</div>
    <select className='dropdown--selector' name={name}>
      {inputs.map(({ label }) => (
        <option value={label} onClick={handleChange}>
          {label}
        </option>
      ))}
    </select>
  </div>
)

export default DropDown

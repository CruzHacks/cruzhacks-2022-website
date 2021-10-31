import React, { useState } from "react"
import { DropDownProps } from "Props/props"
import "./index.scss"

const DropDown: React.FC<DropDownProps> = ({
  question,
  inputs,
}: DropDownProps) => {
  // const [isInvisible, setIsVisible] = useState(false)
  const [active, setActive] = useState("select")

  return (
    <div className='dropdown'>
      <div className='dropdown__question'>{question}</div>
      <select name={active}>
        {inputs.map(({ label }) => (
          <option value={label} onClick={() => setActive(`${label}`)}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropDown

import React from "react"
import { FieldProps } from "Props/props"
import "./index.scss"

const TextBox: React.FC<FieldProps> = ({
  name,
  handleChange,
  fieldState,
  errorMessage,
  label,
  maxLength,
}: FieldProps) => (
  <div className='text_box__container'>
    <div className='text_box__container--question'>{name}</div>
    {errorMessage}
    <textarea
      aria-label={label}
      value={fieldState}
      maxLength={maxLength}
      onChange={handleChange}
    />
  </div>
)

export default TextBox

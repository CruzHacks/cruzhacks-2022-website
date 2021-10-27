import React from "react"
import { FieldProps } from "Props/props"

const TextBox: React.FC<FieldProps> = ({
  name,
  handleChange,
  fieldState,
  errorMessage,
  label,
  maxLength,
}: FieldProps) => (
  <div className='input-box'>
    {name}
    {errorMessage.length > 0 ? errorMessage : ""}
    <textarea
      aria-label={label}
      value={fieldState}
      maxLength={maxLength}
      onChange={handleChange}
    />
  </div>
)

export default TextBox

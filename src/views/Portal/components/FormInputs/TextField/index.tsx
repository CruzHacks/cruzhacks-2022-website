import React from "react"
import { FieldProps } from "Props/props"
import "./index.scss"

const TextField: React.FC<FieldProps> = ({
  name,
  handleChange,
  fieldState,
  errorMessage,
  label,
  maxLength,
}: FieldProps) => (
  <div className='text_field'>
    {name}
    {errorMessage.length > 0 ? errorMessage : ""}
    <input
      type='text'
      aria-label={label}
      value={fieldState}
      maxLength={maxLength}
      onChange={handleChange}
    />
  </div>
)

export default TextField

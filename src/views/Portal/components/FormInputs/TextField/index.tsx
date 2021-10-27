import React from "react"
import { FieldProps } from "Props/props"

const TextField: React.FC<FieldProps> = ({
  name,
  handleChange,
  fieldState,
  errorMessage,
  label,
  maxLength,
}: FieldProps) => (
  <div className='input-field'>
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

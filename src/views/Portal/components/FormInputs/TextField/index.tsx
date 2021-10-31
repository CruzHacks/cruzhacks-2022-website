import React from "react"
import { FieldProps } from "Props/props"
import "./index.scss"

const TextField: React.FC<FieldProps> = ({
  className,
  name,
  handleChange,
  fieldState,
  errorMessage,
  label,
  maxLength,
}: FieldProps) => (
  <div className={className}>
    {name}
    <div className={`${className}--error-message`} style={{ color: "#FF0000" }}>
      {errorMessage}
    </div>
    <input
      type='text'
      aria-label={label}
      value={fieldState}
      maxLength={maxLength}
      onChange={handleChange}
      className={`${className}--input`}
    />
  </div>
)

export default TextField

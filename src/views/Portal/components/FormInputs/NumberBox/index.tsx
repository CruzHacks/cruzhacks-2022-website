import React from "react"
import { NumberFieldProps } from "Props/props"
import "./index.scss"

const NumberField: React.FC<NumberFieldProps> = ({
  className,
  name,
  handleChange,
  fieldState,
  errorMessage,
  label,
  min,
  max,
  maxLength,
}: NumberFieldProps) => (
  <div className={className}>
    {name}
    <div className={`${className}--error-message`} style={{ color: "#FF0000" }}>
      {errorMessage}
    </div>
    <input
      type='number'
      aria-label={label}
      name={label}
      value={fieldState}
      min={min}
      max={max}
      maxLength={maxLength}
      onChange={handleChange}
      className={`${className}--input`}
    />
  </div>
)

export default NumberField

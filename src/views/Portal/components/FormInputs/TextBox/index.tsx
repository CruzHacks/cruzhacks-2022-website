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
  className,
}: FieldProps) => (
  <div className={`text-box-component${className}`}>
    <div className={`text-box-component${className}__fieldName`}>{name}</div>
    <div className={`text-box-component${className}__errorMessage`}>
      {errorMessage}
    </div>
    <textarea
      name={label}
      aria-label={label}
      value={fieldState}
      maxLength={maxLength}
      onChange={handleChange}
      className={`text-box-component${className}__input`}
    />
  </div>
)

export default TextBox

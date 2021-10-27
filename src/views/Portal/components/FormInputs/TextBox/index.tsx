import React from "react"
import { FieldProps } from "Props/props"

const TextBox : React.FC<FieldProps> = ({ name, handleChange, fieldState, errorMessage } : FieldProps) => {
    return (
        <label>
            {name}
            <textarea 
                value={fieldState}
                onChange={handleChange}
            />
            {errorMessage.length > 0 ? errorMessage : ''}
        </label>
    )
}

export default TextBox

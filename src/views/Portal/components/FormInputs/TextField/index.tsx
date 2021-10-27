import React from "react"
import { FieldProps } from "Props/props"

const TextField : React.FC<FieldProps> = ({ name, handleChange, fieldState, errorMessage } : FieldProps) => {
    return (
        <label>
            {name}
            
            <input
                type='text'
                value={fieldState} 
                onChange={handleChange}
            />
            {errorMessage.length > 0 ? errorMessage : ''}
        </label>
    )
}

export default TextField

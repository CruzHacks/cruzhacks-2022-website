import React from "react"
import { FileProps } from "Props/props"
import "./index.scss"

const FileUpload: React.FC<FileProps> = ({
  question,
  name,
  handleChange,
  errorMessage,
  className,
}: FileProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange((prev: any) => ({
      ...prev,
      [name]: e.target.files ? e.target.files[0] : null,
    }))
  }

  const onDrop = () => {}
  return (
    <div className='file-upload-component'>
      <div className='file-upload-component__fieldName'>{question}</div>
      <div className='file-upload-component__error'>{errorMessage}</div>
      <div className='file-upload-component__input'>
        <input
          type='file'
          accept='application/pdf'
          onChange={onChange}
          onDrop={onDrop}
          className={`file-upload-component-${className}`}
        />
      </div>
    </div>
  )
}

export default FileUpload

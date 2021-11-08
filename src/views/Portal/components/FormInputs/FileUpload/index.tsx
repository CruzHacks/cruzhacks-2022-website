import React, { useState, useRef } from "react"
import { FileProps } from "Props/props"
import "./index.scss"
import { ReactComponent as UploadFileIcon } from "../../../../../images/application/UploadFileIcon.svg"
import { ReactComponent as TrashCan } from "../../../../../images/application/TrashCan.svg"

const FileUpload: React.FC<FileProps> = ({
  question,
  name,
  handleChange,
  errorMessage,
  className,
  fieldState,
}: FileProps) => {
  const [isZone, setIsZone] = useState<boolean>(false)
  const fileInput = useRef<HTMLInputElement>(document.createElement("input"))
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange((prev: any) => ({
      ...prev,
      [name]: e.target.files ? e.target.files[0] : null,
    }))
  }
  const handleClick = () => {
    fileInput.current.click()
  }
  const handleRemoveFile = () => {
    handleChange((prev: any) => ({
      ...prev,
      [name]: null,
    }))
  }
  const displayUpload = () => (
    <div className='file-upload-component__messages--fileDisplay'>
      <div>{fieldState.name}</div>
      <div>
        size: {fieldState.size / 1_000_000} MB
        <button
          type='button'
          onClick={handleRemoveFile}
          title='remove file'
          className='file-upload-component__messages--fileDisplay__button'
        >
          <TrashCan />
          <span className='hiddentext'>delete</span>
        </button>
      </div>
    </div>
  )
  const handleDragLeave = (e: any) => {
    e.preventDefault()
    setIsZone(false)
  }
  const handleDragOver = (e: any) => {
    e.preventDefault()
    setIsZone(true)
  }
  const handleDrop = (e: any) => {
    e.preventDefault()
    handleChange((prev: any) => ({
      ...prev,
      [name]: e.dataTransfer.files ? e.dataTransfer.files[0] : null,
    }))
    setIsZone(false)
  }
  return (
    <div className='file-upload-component'>
      <div className='file-upload-component__messages'>
        <div className='file-upload-component__messages--fieldName'>
          {question}
        </div>
        <div className='file-upload-component__messages--errorMessage'>
          {errorMessage}
        </div>
        {fieldState ? displayUpload() : ""}
      </div>
      <div className='file-upload-component__input'>
        <button
          type='button'
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className='file-upload-component__button'
          title='upload file'
        >
          <UploadFileIcon />
          <span
            className={
              isZone ? "file-upload-component__button--text" : "hiddentext"
            }
          >
            Drop Here
          </span>
        </button>
        <input
          type='file'
          accept='application/pdf'
          onChange={onChange}
          className={`file-upload-component-${className}`}
          ref={fileInput}
          style={{ display: "none" }}
        />
      </div>
    </div>
  )
}

export default FileUpload

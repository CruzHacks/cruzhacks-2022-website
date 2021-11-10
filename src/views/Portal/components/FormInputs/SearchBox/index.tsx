import React, { useState, useEffect } from "react"
import "./index.scss"

interface SearchBoxProps {
  question: string
  data: string[]
  label: string
  fieldState: string
  errorMessage: string
  maxLength: number
  maxReturn: number
  handleChange: any
}

const SearchBox: React.FC<SearchBoxProps> = ({
  question,
  data,
  label,
  fieldState,
  errorMessage,
  maxReturn,
  handleChange,
  maxLength,
}: SearchBoxProps) => {
  const [matchedItems, setMatchedItems] = useState<string[]>(data)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(false)
  }, [])

  const handleQuery = () => {
    const Matches = data.filter(entry =>
      entry.toLowerCase().includes(fieldState.toLowerCase())
    )
    setMatchedItems(Matches)
  }

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMounted(true)
    handleChange(e.target.value)
    handleQuery()
  }

  const onClick = (val: string) => {
    handleChange(val)
    setMatchedItems([])
  }

  const dropdown = () => (
    <div className='search-box-component__dropdown'>
      {fieldState &&
        matchedItems.slice(0, maxReturn).map(item => (
          <div
            className='search-box-component__dropdown-button-container'
            key={item}
          >
            <button
              type='button'
              onMouseDown={() => {
                onClick(item)
              }}
              aria-label={item}
              className='search-box-component__dropdown-button'
            >
              {item}
            </button>
          </div>
        ))}
    </div>
  )

  return (
    <div className='search-box-component'>
      <div className='search-box-component__question'>{question}</div>
      <div className='search-box-component__errorMessage'>{errorMessage}</div>
      <div className='search-box-component__input'>
        <div>
          <input
            type='text'
            name={label}
            value={fieldState}
            onChange={handleQueryChange}
            maxLength={maxLength}
            onBlur={() => {
              setMatchedItems([])
            }}
            className={`search-box-component__input-box ${
              errorMessage ? "search-box-component__error" : ""
            }`}
          />
        </div>
        {mounted && dropdown()}
      </div>
    </div>
  )
}

export default SearchBox

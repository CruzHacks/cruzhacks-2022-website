import React, { useState } from "react"
import "./index.scss"

interface SearchBoxProps {
  question: string
  data: string[]
  label: string
  fieldState: string
  errorMessage: string
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
}: SearchBoxProps) => {
  const [matchedItems, setMatchedItems] = useState<string[]>(data)
  const handleQuery = () => {
    const Matches = data.filter(entry =>
      entry.toLowerCase().includes(fieldState.toLowerCase())
    )
    setMatchedItems(Matches)
  }

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              onClick={() => onClick(item)}
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
            className={`search-box-component__input-box ${
              errorMessage ? "search-box-component__error" : ""
            }`}
          />
        </div>
        {dropdown()}
      </div>
    </div>
  )
}

export default SearchBox

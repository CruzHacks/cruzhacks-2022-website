import React, { useState } from "react"
import "./index.scss"

interface SearchBoxProps {
  question: string
  data: string[]
  label: string
  fieldState: string
  maxReturn: number
  errorMessage: string
  handleChange: any
}

const SearchBox: React.FC<SearchBoxProps> = ({
  question,
  data,
  label,
  fieldState,
  maxReturn,
  errorMessage,
  handleChange,
}: SearchBoxProps) => {
  const [query, setQuery] = useState<string>(fieldState)
  const [matchedItems, setMatchedItems] = useState<string[]>(data)
  const [isNoMatch, setIsNoMatch] = useState<boolean>(false)
  const handleQuery = () => {
    const Matches = data.filter(entry =>
      entry.toLowerCase().includes(query.toLowerCase())
    )
    setMatchedItems(Matches)
  }

  const handleQueryChange = isNoMatch
    ? handleChange
    : (e: any) => {
        setQuery(e.target.value)
        handleQuery()
      }
  const dropdown = (toDisplay: string[], onChange: any) => (
    <div className='SearchBox__component--dropdown'>
      <select
        onChange={onChange}
        name={label}
        className='SearchBox__component--dropdown__select'
      >
        {toDisplay.map(item => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  )
  const notListed = (
    <div className='SearchBox__component--checkbox'>
      <input
        type='checkbox'
        onChange={() => setIsNoMatch(!isNoMatch)}
        className='SearchBox__component--checkbox__box'
      />
      Not Listed
    </div>
  )

  return (
    <div className='SearchBox__component'>
      <div className='SearchBox__component--question'>{question}</div>
      <div className='SearchBox__component--errorMessage'>{errorMessage}</div>
      <input
        type='text'
        name={label}
        value={isNoMatch ? fieldState : query}
        onChange={handleQueryChange}
        className='SearchBox__component--input'
      />
      {matchedItems.length > 0 && matchedItems.length < maxReturn
        ? dropdown(matchedItems, handleChange)
        : notListed}
    </div>
  )
}

export default SearchBox

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
    <div className='SearchBox-container__dropdown'>
      {fieldState &&
        matchedItems.slice(0, maxReturn).map(item => (
          <div className='SearchBox-container__dropdown' key={item}>
            <button
              type='button'
              onClick={() => onClick(item)}
              aria-label={item}
            >
              {item}
            </button>
          </div>
        ))}
    </div>
  )
  // const notListed = (
  //   <div className='SearchBox-container__notListed'>
  //       <button type='button' onClick={onChange}>
  //         "Not"
  //       </button>
  //   </div>
  // )

  return (
    <div className='SearchBox-container'>
      <div className='SearchBox-container__question'>{question}</div>
      <div className='SearchBox-container__errorMessage'>{errorMessage}</div>
      <div className='SearchBox-container__input'>
        <input
          type='text'
          name={label}
          value={fieldState}
          onChange={handleQueryChange}
        />
      </div>
      {dropdown()}
    </div>
  )
}

export default SearchBox

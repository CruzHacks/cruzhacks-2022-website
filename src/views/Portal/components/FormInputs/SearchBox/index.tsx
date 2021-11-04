import React, { useState } from "react"
import TextField from "../TextField"
import DropDown from "../DropDown"

interface SearchProps {
  className: string
  question: string
  name: string
  items: string[]
  handleSelection: any
  maxLength: number
  maxReturn: number
}

const SearchBox: React.FC<SearchProps> = ({
  className,
  question,
  name,
  items,
  handleSelection,
  maxLength,
  maxReturn,
}: SearchProps) => {
  const [query, setQuery] = useState<string>("")
  const [returnValues, setReturnValues] = useState<string[]>(items)
  const handleQuery = () => {
    const copy = items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    )
    setReturnValues(copy)
  }
  const handleChange = (event: any) => {
    setQuery(event.target.value)
    handleQuery()
  }

  const dropdown =
    returnValues.length < maxReturn ? (
      <DropDown
        question=''
        errorMessage=''
        inputs={returnValues.map(item => ({ label: item }))}
        name={name}
        handleChange={handleSelection}
      />
    ) : (
      ""
    )
  const nulldropdown = (
    <DropDown
      errorMessage=''
      question=''
      inputs={[{ label: "Not Listed" }]}
      name={name}
      handleChange={handleSelection}
    />
  )
  return (
    <div className={className}>
      <TextField
        className={className}
        name={question}
        handleChange={handleChange}
        fieldState={query}
        errorMessage=''
        label={name}
        maxLength={maxLength}
      />
      {returnValues.length === 0 ? nulldropdown : dropdown}
    </div>
  )
}

export default SearchBox

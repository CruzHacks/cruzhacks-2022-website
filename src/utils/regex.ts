export const phoneRegex = (number: string) => {
  return !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(number)
}

export const alphanumericRegex = (message: string) => {
  return !/^[a-zA-Z0-9 ]+$/.test(message)
}

export const alphanumericPunctuationRegex = (message: string) => {
  return !/^[\x20-\x7E]*$/.test(message)
}

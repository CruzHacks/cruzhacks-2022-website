import { Dispatch, SetStateAction } from "react"

export interface VerificationEmailProps {
  user: string | undefined
  token: string
}

export interface CardProps {
  name: string
  imgSrc: string
  title: string
  LinkedInLink: string
}

export interface MilestoneProps {
  image: string
  milestoneName: string
  milestoneStat: string
  id: string
  hasModal?: boolean
}

export interface AboutProps {
  title: string
  description: string
}

export interface NavbarRouteProps {
  route: string
  name: string
}

export interface MessageProps {
  message: string
  key: string
}

export interface AnnouncementProps {
  title: string
  date: number
  message: string
  id: string
}

export interface FAQProps {
  question: string
  answer: string
}

export interface ApplicationPagesProps {
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export interface FieldProps {
  name: string
  handleChange: any
  fieldState: string | undefined
  errorMessage: string | undefined
  label: string
  maxLength?: number
  className?: string
  disabled?: boolean
  placeholder?: string
}

export interface NumberFieldProps {
  name: string
  handleChange: any
  fieldState: string | undefined
  errorMessage: string | undefined
  label: string
  min?: number
  max?: number
  maxLength?: number
}

export interface RadioButtonProps {
  label: string
  name?: string
}

export interface RadioFormProps {
  question: string
  name: string
  value: string
  errorMessage: string | undefined
  inputs: {
    label: string
  }[]
  handleChange: any
  className?: string
}

export interface DropDownListProps {
  inputs: {
    label: string
  }[]
}

export interface DropDownProps {
  question: string
  errorMessage: string | undefined
  value: string
  inputs: {
    label: string
  }[]
  name: any
  handleChange: any
}

export interface FileProps {
  question: string
  name: string
  handleChange: any
  errorMessage: string
  className: string
  fieldState: any
}

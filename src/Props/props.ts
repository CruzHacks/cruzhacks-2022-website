import { Dispatch, SetStateAction } from "react";

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
}

export interface AboutProps {
  title: string,
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

export interface ApplicationPagesProps {
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export interface FieldProps {
  name: string
  handleChange: any
  fieldState: string
  errorMessage: string
}

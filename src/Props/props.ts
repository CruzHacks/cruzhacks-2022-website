export interface VerificationEmailProps {
  user: string | undefined
  token: string
}

export interface CardProps {
  name: string
  imgsrc: string
  title: string
  LinkedInLink?: string
}

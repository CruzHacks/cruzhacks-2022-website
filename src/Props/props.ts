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

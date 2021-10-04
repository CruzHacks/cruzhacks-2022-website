export interface VerificationEmailProps {
  user: string | undefined
  token: string
}

export interface MilestoneProps {
  image: string,
  milestoneName: string,
  milestoneStat: string,
  id: string
}

export interface AboutProps {
  title: string,
  description: string
}
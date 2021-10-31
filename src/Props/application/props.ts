import { Dispatch, SetStateAction } from "react"

export interface ContactProps {
  fname: string
  lname: string
  phone: string
  email: string | undefined
}

export interface DemographicProps {}

export interface ShortAnswerProps {
  whyCruzHacks: string
  newThisYear: string
  grandestInvention: string
  whyCruzHacksErr: string
  newThisYearErr: string
  grandestInventionErr: string
}

export interface PriorExperienceProps {
  firstCruzHacks: boolean
  hackathonCount: number
  priorExperience: string
  firstCruzHacksErr: string
  hackathonCountErr: string
  priorExperienceErr: string
}

export interface ConnectedProps {}

export interface MLHProps {}

export interface ContactHandlers {
  parentState: ContactProps
  setParentState: any
  validationErrors: ContactProps
}

export interface DemographicHandlers {
  parentState: DemographicProps
  setParentState: any
  validationErrors: DemographicProps
}

export interface ShortAnswerHandlerProps {
  parentState: ShortAnswerProps
  setParentState: Dispatch<SetStateAction<ShortAnswerProps>>
}

export interface PriorExperienceHandlerProps {
    parentState: PriorExperienceProps
    setParentState: Dispatch<SetStateAction<PriorExperienceProps>>
}
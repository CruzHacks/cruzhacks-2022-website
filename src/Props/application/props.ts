export interface ContactProps {
  fname: string
  lname: string
  phone: string
  email: string | undefined
}

export interface DemographicProps {
    
}

export interface ShortAnswerProps {
    
}

export interface PriorExperienceProps {
    
}

export interface ConnectedProps {
    
}

export interface MLHProps {
    
}

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

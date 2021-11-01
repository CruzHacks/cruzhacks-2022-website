import { ContactProps, DemographicProps } from "Props/application/props"

export function generateContactProps(
  fname: string = "",
  lname: string = "",
  phone: string = "",
  email: string | undefined = ""
) {
  const newObj: ContactProps = {
    fname,
    lname,
    phone,
    email,
  }
  return newObj
}

export function generateDemographicProps(
  age: string = "",
  pronounCount: number = 0,
  pronouns: string[] = [],
  race: string = "",
  sexualityCount: number = 0,
  sexuality: string[] = [],
  school: string = "",
  collegeAffiliation: string = "",
  eventLocation: string = "",
  major: string = "",
  currentStanding: string = "",
  country: string = ""
) {
  const newObj: DemographicProps = {
    age,
    pronounCount,
    pronouns,
    race,
    sexualityCount,
    sexuality,
    school,
    collegeAffiliation,
    eventLocation,
    major,
    currentStanding,
    country,
  }
  return newObj
}

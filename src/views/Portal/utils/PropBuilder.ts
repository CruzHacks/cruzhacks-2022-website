import { ContactProps } from "Props/application/props"

const generateContactProps = (
  fname: string,
  lname: string,
  phone: string,
  email: string | undefined
) => {
  const newObj: ContactProps = {
    fname,
    lname,
    phone,
    email,
  }
  return newObj
}

export default generateContactProps

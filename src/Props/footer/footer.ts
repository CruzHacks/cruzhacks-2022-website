import { social } from "./props"
import { ReactComponent as FacebookIcon } from "../../images/socialMedia/facebook.svg"
import { ReactComponent as TwitterIcon } from "../../images/socialMedia/twitter.svg"
import { ReactComponent as LinkedInIcon } from "../../images/socialMedia/linkedin.svg"
import { ReactComponent as InstagramIcon } from "../../images/socialMedia/insta.svg"
import { ReactComponent as EmailIcon } from "../../images/socialMedia/mail.svg"

const socials: social[] = [
  {
    link: "https://www.facebook.com/CruzHacks/",
    Icon: FacebookIcon,
    label: "facebook",
  },
  {
    link: "https://twitter.com/CruzHacks",
    Icon: TwitterIcon,
    label: "twitter",
  },
  {
    link: "https://www.linkedin.com/company/cruzhacks",
    Icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    link: "https://www.instagram.com/cruzhacks/",
    Icon: InstagramIcon,
    label: "instagram",
  },
  {
    link: "mailto:contact@cruzhacks.com",
    Icon: EmailIcon,
    label: "email",
  },
]

export default socials

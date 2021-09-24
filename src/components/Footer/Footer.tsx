import * as React from "react"
import "./Footer.scss"

interface social {
  link: string
  icon: string
  label: string
}
interface FooterProps {
  socials: social[]
}

const Footer: React.FC<FooterProps> = ({ socials }: FooterProps) => (
  <div className='footer-component'>
    <div className='footer-icons'>
      {socials.map(({ link, icon, label }) => (
        <a
          key={label}
          href={link}
          target='_blank'
          rel='noreferrer'
          className='footer_link-wrapper'
        >
          <img className='footer_link-icon' src={icon} alt={label} />
        </a>
      ))}
    </div>
  </div>
)
export default Footer

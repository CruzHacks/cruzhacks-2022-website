import * as React from "react"
import "./Footer.scss"
import { FooterProps } from "Props/footer/props"
import { ReactComponent as FooterHill } from "../../images/footerhill.svg"

const Footer: React.FC<FooterProps> = ({ socials, theme }: FooterProps) => (
  <div className='footer-component' style={{ background: theme.bgColor }}>
    <div className='footer-component--icons'>
      {socials.map(({ link, Icon, label }) => (
        <a
          key={label}
          href={link}
          target='_blank'
          rel='noreferrer'
          className='footer-component__link--wrapper'
        >
          <Icon
            className='footer-component__link--icon'
            fill={theme.iconFill}
            stroke={label === "email" ? theme.iconStroke : "#00000000"}
          />
        </a>
      ))}
    </div>
    <div className='footer-component__text' style={{ color: theme.textColor }}>
      <FooterHill className='hills' fill={theme.hillColor} />
      <div className='footer-component__text--copyright'>
        @ 2022 Cruzhacks. All rights reserved.
      </div>
    </div>
  </div>
)
export default Footer

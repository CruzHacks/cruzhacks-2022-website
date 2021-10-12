import * as React from "react"
import "./Footer.scss"
import socials from "Props/footer/footer"
import { FooterProps } from "Props/footer/props"
import { ReactComponent as FooterHillDesktop } from "images/footer/footer-hills-desktop.svg"
import { ReactComponent as FooterHillMobile } from "images/footer/footer-hills-mobile.svg"

const Footer: React.FC<FooterProps> = ({ theme }: FooterProps) => (
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
      <FooterHillDesktop
        className='footer-component__hills footer-component__hills--desktop'
        fill={theme.hillColor}
      />
      <FooterHillMobile
        className='footer-component__hills footer-component__hills--mobile'
        fill={theme.hillColor}
      />
      <div className='footer-component__text--copyright'>
        © 2022 CruzHacks. All rights reserved.
      </div>
    </div>
  </div>
)

export default Footer

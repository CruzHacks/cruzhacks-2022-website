import * as React from "react"
import "./Footer.scss"
import socials from "Props/footer/footer"
import { FooterProps } from "Props/footer/props"
import { ReactComponent as FooterHillDesktop } from "images/footer/footer-hills-desktop.svg"
import { ReactComponent as FooterHillMobile } from "images/footer/footer-hills-mobile.svg"
import { ReactComponent as FooterGraphics } from "images/footer/footer-graphics.svg"

const Footer: React.FC<FooterProps> = ({ theme }: FooterProps) => {
  const renderSunsetGraphics = !theme.hillColor
  const iconStroke = renderSunsetGraphics ? "#011C5C" : theme.iconStroke

  return (
    <div
      className={`footer-component${
        // small changes to layout if we are rendering the santa cruz sunset
        renderSunsetGraphics ? " footer-component--with-graphics" : ""
      }`}
      style={{ background: theme.bgColor }}
    >
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
              stroke={label === "email" ? iconStroke : "#00000000"}
            />
          </a>
        ))}
      </div>
      <div
        className='footer-component__text'
        style={{ color: theme.textColor }}
      >
        {/* If theme.hillColor is set, we render the hills. */}
        {theme.hillColor && (
          <FooterHillDesktop
            className='footer-component__hills footer-component__hills--desktop'
            fill={theme.hillColor}
          />
        )}
        {theme.hillColor && (
          <FooterHillMobile
            className='footer-component__hills footer-component__hills--mobile'
            fill={theme.hillColor}
          />
        )}
        <div className='footer-component__text--copyright'>
          © 2022 CruzHacks. All rights reserved.
        </div>
      </div>

      {/* Otherwise we render the santa cruz sunset. */}
      {renderSunsetGraphics && (
        <FooterGraphics className='footer-component__graphics' />
      )}
    </div>
  )
}

export default Footer

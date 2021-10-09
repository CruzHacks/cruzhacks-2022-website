import React, { useState, useEffect } from "react"
import "./NavBar.scss"
import { NavLink, useLocation } from "react-router-dom"
import { ReactComponent as MenuIcon } from "images/icons/menu.svg"
import { NavbarRouteProps } from "Props/props"
import NavbarRoutes from "Props/navbar/navbar"

const NavThemes = {
  team: {
    bgColor: "#233A59",
    textShadow: "-.75px -.75px #A4E9ED, .75px 0px #7263CA",
    menuColor: "#203552",
  },
  home: {
    bgColor: "#36628B",
    textShadow: "0px 3px 2.5px #89B5F8",
    menuColor: "#274F74",
  },
}
interface NavProps {
  theme: string
}

const NavBar: React.FC<NavProps> = ({ theme }: NavProps) => {
  const [windowWidth, setWidth] = useState<number>(501)
  const [menuToggle, setMenuToggle] = useState<boolean>(false)
  const location = useLocation()
  const styling = theme === "team" ? NavThemes.team : NavThemes.home
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const navs = (
    <div className='NavBar__links'>
      <a href='mailto:sponsor@cruzhacks.com' className='NavBar__links--link'>
        SPONSOR US
      </a>
      {NavbarRoutes.map(({ name, route }: NavbarRouteProps) => {
        if (location.pathname === route) {
          return <> </>
        }
        return (
          <NavLink
            exact
            to={route}
            className='NavBar__links--link'
            activeClassName='active'
          >
            {name}
          </NavLink>
        )
      })}
    </div>
  )
  const mobileNavs = (
    <div className='NavBar__links' style={{ background: styling.menuColor }}>
      <a href='mailto:sponsor@cruzhacks.com' className='NavBar__links--link'>
        SPONSOR US
      </a>
      <hr style={{ width: "50px", color: "#E1E2FFBF" }} />
      {NavbarRoutes.map(({ name, route }: NavbarRouteProps) => {
        if (location.pathname === route) {
          return <> </>
        }
        return (
          <NavLink
            exact
            to={route}
            className='NavBar__links--link'
            activeClassName='active'
          >
            {name}
          </NavLink>
        )
      })}
    </div>
  )

  const mobileView = (
    <div className='NavBar__mobile'>
      <button
        className={menuToggle ? "hamburgerButton__open" : "hamburgerButton"}
        type='button'
        onClick={() =>
          menuToggle ? setMenuToggle(false) : setMenuToggle(true)
        }
      >
        <MenuIcon />
      </button>
      {menuToggle ? mobileNavs : ""}
    </div>
  )

  return (
    <div
      className='NavBar'
      style={{ background: styling.bgColor, textShadow: styling.textShadow }}
    >
      {windowWidth <= 501 ? mobileView : navs}
    </div>
  )
}

export default NavBar

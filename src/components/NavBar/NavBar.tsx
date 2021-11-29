import React, { useState, useEffect } from "react"
import "./NavBar.scss"
import { NavLink, useLocation } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { ReactComponent as MenuIcon } from "images/icons/menu.svg"
import { NavbarRouteProps } from "Props/props"
import NavbarRoutes from "Props/navbar/navbar"

const NavThemes = {
  team: {
    bgColor: "#233A59",
    textShadow: "0px 3px 2.5px #89B5F8",
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
  const { isAuthenticated, logout } = useAuth0()
  const [windowWidthHeight, setWidthHeight] = useState<number[]>([501, 500])
  const [menuToggle, setMenuToggle] = useState<boolean>(false)
  const location = useLocation()
  const styling = theme === "team" ? NavThemes.team : NavThemes.home
  useEffect(() => {
    setWidthHeight([window.innerWidth, window.innerHeight])
  }, [])
  useEffect(() => {
    function handleResize() {
      setWidthHeight([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const logoutButton = (
    <button
      className='NavBar__logout'
      type='button'
      onClick={() => logout({ returnTo: window.location.origin })}
      style={{ textShadow: styling.textShadow }}
    >
      LOGOUT
    </button>
  )
  const navs = (
    <div className='NavBar__links'>
      {location.pathname === "/" ? (
        <a
          href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          className='NavBar__links--link'
        >
          CODE OF CONDUCT
        </a>
      ) : (
        ""
      )}
      {NavbarRoutes.filter(
        ({ route }: NavbarRouteProps) => location.pathname !== route
      ).map(({ name, route }: NavbarRouteProps) => (
        <NavLink
          key={name}
          exact
          to={route}
          className='NavBar__links--link'
          activeClassName='active'
        >
          {name}
        </NavLink>
      ))}
      {isAuthenticated ? logoutButton : ""}
    </div>
  )
  const mobileNavs = (
    <div className='NavBar__links' style={{ background: styling.menuColor }}>
      {location.pathname === "/" ? (
        <a
          href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          className='NavBar__links--link'
        >
          CODE OF CONDUCT
        </a>
      ) : (
        ""
      )}
      {NavbarRoutes.filter(
        ({ route }: NavbarRouteProps) => location.pathname !== route
      ).map(({ name, route }: NavbarRouteProps) => (
        <div key={name}>
          <hr style={{ width: "75px", color: "#E1E2FFBF" }} />
          <NavLink
            exact
            to={route}
            className='NavBar__links--link'
            activeClassName='active'
          >
            {name}
          </NavLink>
        </div>
      ))}
      <hr style={{ width: "75px", color: "#E1E2FFBF" }} />
      {isAuthenticated ? logoutButton : ""}
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
      {windowWidthHeight[0] <= 1200 ? mobileView : navs}
    </div>
  )
}

export default NavBar

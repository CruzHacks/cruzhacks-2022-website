import React from "react"
import "./Button.scss"

type Modifier = "primary" | "secondary"

export interface ButtonProps {
  className?: string
  modifier?: Modifier
  label: string
  disabled?: boolean
  href?: string
  onClick?: any
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  disabled,
  href,
  onClick,
  modifier,
  children,
}: ButtonProps) => {
  const classes = [className]
  classes.push("Button")
  if (modifier) {
    classes.push(` Button--${modifier}`)
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes.join(" ")}
        target='_blank'
        rel='noreferrer'
        aria-disabled={disabled}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type='button'
      className={classes.join(" ")}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: "",
  disabled: false,
  href: undefined,
  onClick: undefined,
}

export default Button

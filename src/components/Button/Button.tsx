import React from "react"
import "./Button.scss"

export interface ButtonProps {
  className?: string
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
  children,
}: ButtonProps) => {
  const button = (
    <button
      type='button'
      className={`${className} Button`}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )

  // if a link is provided, we want to wrap the content inside an anchor tag
  if (href) {
    return (
      <a href={href} target='_blank' rel='noreferrer'>
        {button}
      </a>
    )
  }

  return button
}

Button.defaultProps = {
  className: "",
  disabled: false,
  href: undefined,
  onClick: undefined,
}

export default Button

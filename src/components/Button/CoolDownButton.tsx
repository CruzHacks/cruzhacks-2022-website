import React, { useEffect, useState } from "react"
import Button, { ButtonProps } from "./Button"

interface CoolDownButtonProps extends ButtonProps {
  duration: number
  localStorageKey?: string
}

const CoolDownButton: React.FC<CoolDownButtonProps> = ({
  duration,
  localStorageKey,
  onClick,
  children,
  ...rest
}: CoolDownButtonProps) => {
  // check localStorage to see if the cool down has passed
  let ttl = 0
  if (localStorageKey) {
    const expiration = localStorage.getItem(localStorageKey)
    if (expiration) {
      ttl = Number.parseInt(expiration, 10) - Date.now()
    }
    if (ttl < 0) {
      localStorage.removeItem(localStorageKey)
    }
  }

  const [disabled, setDisabled] = useState<boolean>(rest.disabled || ttl > 0)

  useEffect(() => {
    if (disabled && !rest.disabled) {
      // re-enable the button after a set amount of time
      const timeout = setTimeout(
        () => {
          setDisabled(false)
          if (localStorageKey) localStorage.removeItem(localStorageKey)
        },
        ttl > 0 ? ttl : duration
      )

      return () => {
        clearTimeout(timeout)
      }
    }

    return () => {}
  }, [disabled])

  const handleOnClick = () => {
    onClick()

    setDisabled(true)
    if (localStorageKey) {
      localStorage.setItem(localStorageKey, `${Date.now() + duration}`)
    }
  }

  return (
    <Button
      className={rest.className}
      label={rest.label}
      disabled={disabled}
      href={rest.href}
      onClick={handleOnClick}
    >
      {children}
    </Button>
  )
}

CoolDownButton.defaultProps = {
  localStorageKey: undefined,
}

export default CoolDownButton

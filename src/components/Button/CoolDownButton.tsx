import React, { useEffect, useState } from "react"
import Button, { ButtonProps } from "./Button"

interface CoolDownButtonProps extends ButtonProps {
  duration: number
  localStorageKey?: string
}

const CoolDownButton: React.FC<CoolDownButtonProps> = ({
  duration,
  disabled: disabledProp,
  onClick,
  children,
  ...rest
}: CoolDownButtonProps) => {
  let { localStorageKey } = rest

  try {
    const testKey = "_test_key_"
    localStorage.setItem(testKey, testKey)
    localStorage.removeItem(testKey)
  } catch (e) {
    localStorageKey = undefined
  }

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

  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    setDisabled(disabledProp || ttl > 0)

    if (ttl > 0) {
      // re-enable the button after a set amount of time
      const timeout = setTimeout(() => {
        setDisabled(false)
        if (localStorageKey) localStorage.removeItem(localStorageKey)
      }, ttl)

      return () => clearTimeout(timeout)
    }

    return () => {}
  }, [disabled, disabledProp])

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

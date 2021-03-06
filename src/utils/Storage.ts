/**
 * Helper functions to store and retrieve cache data.
 */

/**
 * Store a value.
 *
 * @param key - A unique string.
 * @param value - The value to store. Can be anything that is JSON serializable.
 * @param timeoutInSeconds - The number of seconds from now for this value to be
 *                           valid. If undefined, this value will never expire.
 * @param user - If set, associate this value with a user.
 */
export function store(
  key: string,
  value: any,
  timeoutInSeconds?: number,
  user?: string
): any {
  try {
    const data = {
      value,
      user,
      ...(timeoutInSeconds && {
        expiration: `${Date.now() + timeoutInSeconds * 1000}`,
      }),
    }

    window.sessionStorage.setItem(key, JSON.stringify(data))
  } catch (err) {
    // ignore errors
  }

  return value
}

/**
 * Retrieve value.
 *
 * @param key
 * @param defaultValue - The default value returned if the cache is not found,
 *                       the timeout expired, the user changed, or an unknown
 *                       error occurred.
 * @param user - If set, ensure that the previously stored value is associated
 *               with the given user.
 */
export function retrieve(key: string, defaultValue?: any, user?: string): any {
  try {
    const raw = window.sessionStorage.getItem(key)
    if (!raw) {
      return defaultValue
    }
    const data = JSON.parse(raw)

    // check timeout
    if (
      data.expiration &&
      Number.parseInt(data.expiration, 10) - Date.now() < 0
    ) {
      window.sessionStorage.removeItem(key) // cleanup
      return defaultValue
    }

    // check user
    if (data.user && data.user !== user) {
      return defaultValue
    }

    if (data.value !== undefined) {
      return data.value
    }
  } catch (err) {
    // ignore errors
  }

  return defaultValue
}

/**
 * Remove cache.
 */
export function removeCache(key: string, user?: string): void {
  const data = retrieve(key, undefined, user)
  if (data) {
    window.sessionStorage.removeItem(key)
  }
}

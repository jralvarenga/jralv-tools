import { useEffect, useRef } from 'react'

/**
 * Handle a timeout to perform when the provided value expires
 * @param callback Function to do when times out
 * @param timeout Timeout in miliseconds to redo the callback
 * @example
 * useTimeout(() => {
 *  console.log('Perform an action')
 * }, 1000) // Callback will execute after 1 second
 */
export default function useTimeout(callback: () => void, timeout: number) {
  const savedCallback = useRef<() => void>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const interval = setTimeout(() => savedCallback.current!(), timeout)
    return () => clearTimeout(interval)
  }, [timeout])
}

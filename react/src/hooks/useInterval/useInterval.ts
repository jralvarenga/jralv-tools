import { useEffect, useRef } from 'react'

/**
 * Handle an interval usign react useEffect
 * @param callback Function to do in each interval
 * @param delay delay in miliseconds to redo the callback
 * @example
 * useInterval(() => {
 *  console.log('Perform an action')
 * }, 1000) // Repeat callback each second
 */
export default function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const interval = setInterval(() => savedCallback.current!(), delay)
    return () => clearInterval(interval)
  }, [delay])
}

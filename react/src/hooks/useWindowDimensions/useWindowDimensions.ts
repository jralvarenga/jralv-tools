import { useEffect, useState } from 'react'

interface Return {
  width: number
  height: number
}

/**
 * Handles and gets everytime user resizes current window
 * @returns Width and height of current window
 * @example
 * const { width, height } = useWindowDimensions()
 * @example
 * const dimmesions = useWindowDimensions()
 */
export default function useWindowDimensions(): Return {
  // Controls state of window size
  const [dimensions, setDimensions] = useState<Return>({
    width: 0,
    height: 0,
  })

  /**
   * Adds a listener to get each time user resizes window
   */
  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      setDimensions({
        width: event.view?.innerWidth || 0,
        height: event.view?.innerHeight || 0,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return dimensions
}

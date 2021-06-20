import { useState, useEffect } from 'react'

export default function useIsMount() {
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setIsMount(true)
  }, [])

  return isMount
}
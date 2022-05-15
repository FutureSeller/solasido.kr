import { createContext, useState, useContext } from 'react'
import { debounce } from 'lodash'

import useEventListener from '../hooks/useEventListener'

import type { ReactNode } from 'react'

const ScreenWidthContext = createContext<number>(0)

interface Props {
  children: ReactNode
}

export default function ScreenWidthProvider({ children }: Props) {
  const [deviceType, setDeviceType] = useState<number>(0)

  const handleResize = () => {
    setDeviceType(window.screen.width)
  }

  useEventListener({
    type: 'resize',
    listener: debounce(() => {
      handleResize()
    }, 50),
    handleBeforeListen: handleResize,
  })

  return <ScreenWidthContext.Provider value={deviceType}>{children}</ScreenWidthContext.Provider>
}

export const useScreenWidth = () => useContext(ScreenWidthContext)

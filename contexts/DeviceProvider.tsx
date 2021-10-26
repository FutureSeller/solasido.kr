import { createContext, useState, useEffect, useContext } from 'react'
import { debounce } from 'lodash'

import useEventListener from '../hooks/useEventListener'
import { getCurrentDeivceType, DeviceType } from '../styles/responsive'

import type { ReactNode } from 'react'

const DeviceContext = createContext<DeviceType | null>(DeviceType.XXL)

interface Props {
  children: ReactNode
}

export default function DeviceContextProvider({ children }: Props) {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null)

  const handleResize = () => setDeviceType(getCurrentDeivceType())

  useEventListener({
    type: 'resize',
    listener: debounce(() => {
      handleResize()
    }, 50),
    handleBeforeListen: handleResize,
  })

  return <DeviceContext.Provider value={deviceType}>{children}</DeviceContext.Provider>
}

export const useDevice = () => useContext(DeviceContext)

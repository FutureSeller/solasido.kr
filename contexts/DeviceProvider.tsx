import { createContext, useState, useEffect, useContext } from 'react'
import { debounce } from 'lodash'

import { getCurrentDeivceType, DeviceType } from '../styles/responsive'

import type { ReactNode } from 'react'

const DeviceContext = createContext<DeviceType | null>(DeviceType.XXL)

interface Props {
  children: ReactNode
}

export default function DeviceContextProvider({ children }: Props) {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null)

  useEffect(() => {
    if (!window) {
      return
    }

    setDeviceType(getCurrentDeivceType())

    const getDeviceTypeDuringWindowResizing = debounce(() => {
      setDeviceType(getCurrentDeivceType())
    }, 50)

    window.addEventListener('resize', getDeviceTypeDuringWindowResizing)

    return () => {
      window.removeEventListener('resize', getDeviceTypeDuringWindowResizing)
    }
  }, [])

  return <DeviceContext.Provider value={deviceType}>{children}</DeviceContext.Provider>
}

export const useDevice = () => useContext(DeviceContext)

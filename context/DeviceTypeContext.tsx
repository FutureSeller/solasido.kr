import { createContext, useState, useEffect, useContext } from 'react'
import { debounce } from 'lodash'
import type { ReactNode } from 'react'
import { getCurrentDeivceType, DeviceType } from '../utils/responsive'

interface ProviderProps {
  children: ReactNode
}

export const DeivceTypeContext = createContext<DeviceType | null>(null)

export function DeviceTypeContextProvider({ children }: ProviderProps) {
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

  return (
    <DeivceTypeContext.Provider value={deviceType}>{children}</DeivceTypeContext.Provider>
  )
}

export const DeviceTypeContextConsumer = DeivceTypeContext.Consumer

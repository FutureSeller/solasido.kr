import { useContext } from 'react'

import { DeivceTypeContext } from '../context/DeviceTypeContext'

export default function useDeviceType() {
  return useContext(DeivceTypeContext)
}
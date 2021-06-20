import useSectionYOffset from '../../hooks/useSectionYOffset'
import useScrollY from '../../hooks/useScrollY'
import useDeviceType from '../../hooks/useDeviceType'

import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

import { DeviceType, isSmallThanMobileViewPort } from '../../utils/responsive'

const isNavigationToBeHided = (scrollY: number, offset: number) => scrollY < offset

export default function NavigationContainer() {
  const { offsets, clientHeights } = useSectionYOffset()
  const scrollY = useScrollY()
  const deviceType = useDeviceType() ?? DeviceType.XXL

  if (isNavigationToBeHided(scrollY, offsets[0])) {
    return null
  }

  return (
    <nav>
      {isSmallThanMobileViewPort(deviceType)
        ? (
          <MobileNavigation
            offsets={offsets}
            clientHeights={clientHeights}
            scrollY={scrollY}
          />
        )
        : (
          <Navigation
            offsets={offsets}
            clientHeights={clientHeights}
            scrollY={scrollY}
          />
        )
      }
    </nav>
  )
}
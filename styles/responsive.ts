const breakpoints = {
  xxl: '1546px',
  xl: '1280px',
  lg: '1024px',
  md: '768px',
  sm: '480px',
  xs: '375px',
}

const xsLte = `@media only screen and (max-width: ${breakpoints.xs})`
const smLte = `@media only screen and (max-width: ${breakpoints.sm})`
const mdLte = `@media only screen and (max-width: ${breakpoints.md})`
const mdGte = `@media only screen and (min-width: ${breakpoints.md})`
const lgLte = `@media only screen and (max-width: ${breakpoints.lg})`
const xlLte = `@media only screen and (max-width: ${breakpoints.xl})`
const xxlLte = `@media only screen and (max-width: ${breakpoints.xxl})`

export const responsive = { xsLte, smLte, mdLte, mdGte, lgLte, xlLte, xxlLte }

export enum DeviceType {
  XXL = 'xxl',
  XL = 'xl',
  LG = 'lg',
  MD = 'md',
  SM = 'sm',
  XS = 'xs',
}

export const getCurrentDeivceType = () => {
  const { innerWidth } = window

  if (innerWidth <= 375) {
    return DeviceType.XS
  } else if (innerWidth <= 480) {
    return DeviceType.SM
  } else if (innerWidth <= 768) {
    return DeviceType.MD
  } else if (innerWidth <= 1024) {
    return DeviceType.LG
  } else if (innerWidth <= 1280) {
    return DeviceType.XL
  } else {
    return DeviceType.XXL
  }
}

export const isSmallThanTabletViewPort = (deviceType: DeviceType) =>
  [DeviceType.LG, DeviceType.MD, DeviceType.SM, DeviceType.XS].includes(deviceType)

export const isSmallThanMobileViewPort = (deviceType: DeviceType) => [DeviceType.SM, DeviceType.XS].includes(deviceType)

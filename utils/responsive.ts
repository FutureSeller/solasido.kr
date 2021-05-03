export enum DeviceType {
  XXL = 'xxl',
  XL = 'xl',
  LG = 'lg',
  MD = 'md',
  SM = 'sm',
  XS = 'xs'
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
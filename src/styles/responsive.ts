enum BreakPoint {
  MOBILE,
  TABLET,
  LAPTOP,
  LARGE_LAPTOP,
  DESKTOP,
}

const breakPoints = [450, 768, 1024, 1280, 1440]

export const bp = {
  BreakPoint,
  mq: breakPoints.map(bp => `@media (max-width: ${bp}px)`)
}
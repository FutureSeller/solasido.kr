import { useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

export default function LogoAnimationSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }

    const handleMove = () => {
      if (video.currentTime >= video.duration - 0.5) {
        video.currentTime = 0.0
      }
    }
    video.addEventListener('timeupdate', handleMove)

    return () => {
      video.removeEventListener('timeupdate', handleMove)
    }
  }, [])

  return (
    <Box overflow="hidden">
      <Box margin="8px 0" width="100%">
        <video
          ref={videoRef}
          src={'/projects/national-patriots-and-veterans/logo_animation.mp4'}
          muted
          autoPlay
          playsInline
        />
      </Box>
    </Box>
  )
}

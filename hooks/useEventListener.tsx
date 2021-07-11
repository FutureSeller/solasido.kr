import { useEffect } from 'react'

interface EventParam {
  eventName: string
  callback: (e: any) => void
}

export default function useEventListener(events: EventParam[], eventObject?: Window | Document) {
  useEffect(() => {
    const eventObjectTarget = eventObject ?? document
    events.forEach(({ eventName, callback }) => {
      eventObjectTarget.addEventListener(eventName, callback)
    })

    return () => {
      events.forEach(({ eventName, callback }) => {
        eventObjectTarget.removeEventListener(eventName, callback)
      })
    }
  }, [])
}

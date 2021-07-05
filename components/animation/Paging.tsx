import React from 'react'
import { useRouter } from 'next/router'
import { Transition, TransitionGroup } from 'react-transition-group'
import { TransitionStatus } from 'react-transition-group'

interface Props {
  children: React.ReactNode
}

const TIMEOUT = 400
const TRANSITION_STYLES: { [key in TransitionStatus]: any } = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `translateX(50px)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateX(0px)`,
  },
  exiting: {},
  exited: {},
  unmounted: {}
}

export default function Paging({ children }: Props) {
  const router = useRouter()

  return (
    <TransitionGroup>
      <Transition
        key={router.asPath}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT
        }}
      >
        {status => (
          <div style={{ ...TRANSITION_STYLES[status] }}>
            {children}
          </div>
        )}
      </Transition>
    </TransitionGroup>
  )
}

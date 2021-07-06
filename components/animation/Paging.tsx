import React from 'react'
import { Transition, TransitionGroup, TransitionStatus } from 'react-transition-group'

interface Props {
  slug: string
  children: React.ReactNode
}

const TIMEOUT = 500
const TRANSITION_STYLES: { [key in TransitionStatus]: any } = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
  exited: {},
  unmounted: {}
}

export default function Paging({ slug, children }: Props) {
  return (
    <TransitionGroup style={{ position: 'relative' }}>
      <Transition
        key={slug}
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

import React from 'react'
import { Transition, TransitionGroup, TransitionStatus } from 'react-transition-group'

interface Props {
  slug: string
  direction: 'prev' | 'next'
  children: React.ReactNode
}

const TIMEOUT = 500
const TRANSITION_STYLES: { [key in TransitionStatus]: any } = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
  exited: {},
  unmounted: {}
}

const TRNASFORM_VALUE: { [key: string]: any } = {
  prev: {
    entering: 'translateX(50px)',
    exiting: 'translateX(-50px)',
    entered: 'translateX(0px)',
  },
  next: {
    entering: 'translateX(-50px)',
    exiting: 'translateX(50px)',
    entered: 'translateX(0px)',
  },
}

export default function Paging({ slug, direction, children }: Props) {
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
          <div style={{
            ...TRANSITION_STYLES[status],
            transform: TRNASFORM_VALUE[direction][status],
          }}>
            {children}
          </div>
        )}
      </Transition>
    </TransitionGroup>
  )
}

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Transition, TransitionGroup, TransitionStatus } from 'react-transition-group'

interface Props {
  children: React.ReactNode
  direction: 'prev' | 'next'
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

export default function Paging({ children, direction }: Props) {
  const router = useRouter()

  return (
    <TransitionGroup style={{ position: 'relative' }}>
      <Transition
        key={router.asPath}
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

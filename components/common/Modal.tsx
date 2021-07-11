import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import Image from 'next/image'

import useIsMount from '../../hooks/useIsMount'
import useEventListener from '../../hooks/useEventListener'

import { zIndex } from '../../styles/zIndex'
import { colors } from '../../styles/colors'

interface Props {
  title: string
  show: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ title, show, onClose, children }: Props) {
  const isMount = useIsMount()

  useEventListener(
    [{
      eventName: 'keydown',
      callback: (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      },
    }],
    typeof window !== 'undefined' ? window : undefined
  )

  useEffect(() => {
    show
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'unset'
  }, [show])

  if (isMount && show) {
    const $element = document.getElementById('modal-root')

    return $element ? ReactDOM.createPortal(
      <StyledModalOverlay>
        <Header>
          <h1 style={{ borderBottom: '1px solid black'}}>{title}</h1>
          <MenuButton onClick={onClose}>
            <Image
              src="/assets/close.svg"
              alt="close-menu"
              layout="fill"
            />
          </MenuButton>
        </Header>
        <Content>
          {children}
        </Content>
      </StyledModalOverlay>,
      $element
    ) : null
  } else {
    return null
  }
}

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.white};
  z-index: ${zIndex.modal};
  overflow: hidden;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 22px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  height: calc(100% - 120px);
`

const MenuButton = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 3%;
  top: 20px;
  cursor: pointer;
`

/** @jsx jsx */
import { jsx } from '@emotion/react'
import { navigate, WindowLocation } from '@reach/router'
import { PageRenderer } from 'gatsby'
import Modal from 'react-modal'
import Img, { FluidObject } from 'gatsby-image'

Modal.setAppElement('#___gatsby')

interface Props {
  pageContext: {
    detail: {
      fluid: FluidObject
    }
  }
}

export default function ModalPage({ pageContext }: Props) {
  return (
    <div onContextMenu={e => e.preventDefault()}>
      <PageRenderer key="/" location={{ pathname: '/' } as WindowLocation} />
      <Modal
        htmlOpenClassName="ReactModal__Html--open"
        isOpen
        style={{
          overlay: {
            zIndex: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.58)',
          },
          content: {
            inset: '1.5rem',
            maxWidth: '128rem',
            margin: '0 auto',
            zIndex: 3,
            padding: 0,
            border: 0,
          }
        }}
        shouldFocusAfterRender
        shouldCloseOnEsc
        onRequestClose={() => navigate('/')}
      >
        <Img fluid={pageContext.detail.fluid} />
      </Modal>
    </div>
  )
}

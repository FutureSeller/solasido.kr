/** @jsx jsx */
import { jsx } from '@emotion/react'
import { navigate, WindowLocation } from '@reach/router'
import { PageRenderer } from 'gatsby'
import Modal from 'react-modal'
import Img from 'gatsby-image'

Modal.setAppElement('#___gatsby')

export default function ModalPage({ location, pageContext }: { location: any; pageContext: any }) {
  return (
    <div onContextMenu={e => e.preventDefault()}>
      <PageRenderer
        key="/"
        location={{ pathname: '/' } as WindowLocation}
      />
      <Modal
        htmlOpenClassName='ReactModal__Html--open'
        isOpen
        style={{
          overlay: {
            zIndex: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.58)',
          },
          content: {
            inset: '1.5rem',
            maxWidth: '128rem',
            margin: '0 auto',
            zIndex: 12,
            padding: 0,
            border: 0,
          }
        }}
        shouldFocusAfterRender
        shouldCloseOnEsc
        onRequestClose={() => {
          navigate('/', { state: { scrollY: location.state.scrollY }})
        }}
      >
        <Img fluid={pageContext.detailPage.data.detail.childImageSharp.fluid} />
      </Modal>
    </div>
  )
}

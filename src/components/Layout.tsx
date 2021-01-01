import './Layout.scss'

import React from 'react'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <main>{children}</main>
      <footer style={{ marginTop: '2rem' }}>
        © {new Date().getFullYear()}, Built with &nbsp;
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

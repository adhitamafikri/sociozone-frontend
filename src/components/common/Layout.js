import React from 'react'
import { Pane, Heading } from 'evergreen-ui'

const Layout = ({ children }) => {
  return (
    <Pane>
      <Pane background="redTint" padding={16}>
        <Heading>Sociozone</Heading>
      </Pane>
      <Pane width="100%">{children}</Pane>
    </Pane>
  )
}

export default Layout

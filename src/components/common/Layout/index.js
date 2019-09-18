import React from 'react'
import { Pane } from 'evergreen-ui'

function Layout({ children, header, navigation }) {
  return (
    <Pane>
      {header && header.component}
      <Pane width="100%">{children}</Pane>
      {navigation && navigation.component}
    </Pane>
  )
}

export default Layout

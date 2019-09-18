import React from 'react'
import { Pane } from 'evergreen-ui'

function Layout({ children, header, navigation }) {
  return (
    <Pane>
      {header && header.component}
      <Pane width="100%" height="100vh" paddingTop={52} paddingBottom={52}>{children}</Pane>
      {navigation && navigation.component}
    </Pane>
  )
}

export default Layout

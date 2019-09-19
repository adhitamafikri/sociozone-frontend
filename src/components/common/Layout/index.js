import React from 'react'
import { Pane } from 'evergreen-ui'

function Layout({ children, header, navigation }) {
  const paddingBottom = navigation && navigation.component ? 68 : 0
  return (
    <Pane>
      {header && header.component}
      <Pane
        width="100%"
        height="100vh"
        paddingTop={68}
        paddingBottom={paddingBottom}
        paddingLeft={16}
        paddingRight={16}
      >
        {children}
      </Pane>
      {navigation && navigation.component}
    </Pane>
  )
}

export default Layout

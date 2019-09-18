import React from 'react'
import { Pane } from 'evergreen-ui'

function Layout({ children, header, navigation }) {
  return (
    <Pane>
      {header && header.component}
      <Pane
        width="100%"
        height="100vh"
        paddingTop={68}
        paddingBottom={68}
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

import React from 'react'
import styled from 'styled-components'
import { Pane, Heading } from 'evergreen-ui'

const StyledNavigation = styled(Pane)`
  position: fixed;
  bottom: 0;
  left: 0;
`

function Navigation() {
  return (
    <StyledNavigation background="tealTint" width="100%" padding={16}>
      <Heading>Navigation</Heading>
    </StyledNavigation>
  )
}

export default Navigation

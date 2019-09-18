import React from 'react'
import styled from 'styled-components'
import { Pane, Heading } from 'evergreen-ui'

const StyledHeader = styled(Pane)`
  position: fixed;
  top: 0;
  left: 0;
`

function Header() {
  return (
    <StyledHeader background="redTint" width="100%" height={52} padding={16}>
      <Heading>Sociozone</Heading>
    </StyledHeader>
  )
}

export default Header

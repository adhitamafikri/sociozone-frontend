import React from 'react'
import styled from 'styled-components'
import { Pane, Heading, Button } from 'evergreen-ui'

const StyledHeader = styled(Pane)`
  position: fixed;
  top: 0;
  left: 0;
`

function Header({ page }) {
  console.log(page)
  return (
    <StyledHeader
      background="redTint"
      width="100%"
      height={52}
      padding={16}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading>Sociozone</Heading>
      {page === 'profile' && <Button>Logout</Button>}
    </StyledHeader>
  )
}

export default Header

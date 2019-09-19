import React from 'react'
import styled from 'styled-components'
import { Pane, Icon } from 'evergreen-ui'

const StyledNavigation = styled(Pane)`
  position: fixed;
  bottom: 0;
  left: 0;
`

function Navigation() {
  return (
    <StyledNavigation
      background="redTint"
      width="100%"
      height={52}
      padding={16}
      display="flex"
      justifyContent="space-around"
    >
      <Pane>
        <Icon icon="home" />
      </Pane>
      <Pane>
        <Icon icon="search" />
      </Pane>
      <Pane>
        <Icon icon="person" />
      </Pane>
    </StyledNavigation>
  )
}

export default Navigation

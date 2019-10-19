import React from 'react'
import styled from 'styled-components'
import { Pane, Icon } from 'evergreen-ui'

import Link from 'components/common/Link'

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
      <Link to="/home">
        <Pane>
          <Icon icon="home" color="dimgray" />
        </Pane>
      </Link>
      <Link to="/upload">
        <Pane>
          <Icon icon="add" color="dimgray" />
        </Pane>
      </Link>
      <Link to="/search">
        <Pane>
          <Icon icon="search" color="dimgray" />
        </Pane>
      </Link>
      <Link to="/profile">
        <Pane>
          <Icon icon="person" color="dimgray" />
        </Pane>
      </Link>
    </StyledNavigation>
  )
}

export default Navigation

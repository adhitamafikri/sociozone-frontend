import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const StyledLink = styled(RouterLink)`
  color: black;
`

function Link({ children }) {
  return <StyledLink>{children}</StyledLink>
}

export default Link

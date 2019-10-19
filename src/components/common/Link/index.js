import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const StyledLink = styled(RouterLink)`
  color: black;
  text-decoration: none;
`

function Link(props) {
  return <StyledLink to={props.to}>{props.children}</StyledLink>
}

export default Link

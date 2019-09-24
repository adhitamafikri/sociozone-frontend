import React from 'react'
import styled from 'styled-components'
import { Pane, Heading, Button } from 'evergreen-ui'

import PopupLogout from 'components/PopupLogout'

const StyledHeader = styled(Pane)`
  position: fixed;
  top: 0;
  left: 0;
`

function Header({ urlPath }) {
  const [popupActive, setPopupActive] = React.useState(false)
  const togglePopupActive = () => setPopupActive(!popupActive)

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
      {urlPath === '/profile' && <Button onClick={togglePopupActive}>Logout</Button>}
      {urlPath === '/profile' && <PopupLogout active={popupActive} toggle={togglePopupActive} />}
    </StyledHeader>
  )
}

export default Header

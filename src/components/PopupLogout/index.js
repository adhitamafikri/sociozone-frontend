import React from 'react'
import ReactDOM from 'react-dom'
import { Pane, Text, Button } from 'evergreen-ui'

function Popup({ toggle }) {
  return (
    <Pane
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={1000}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Pane
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        background="rgba(0, 0, 0, 0.45)"
        onClick={toggle}
      />
      <Pane
        background="tint1"
        width={250}
        height={200}
        borderRadius={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Text fontWeight={500}>Are You Sure to Log Out?</Text>
        <Button
          appearance="primary"
          width="80%"
          justifyContent="center"
          marginTop={24}
        >
          Logout
        </Button>
        <Button
          width="80%"
          justifyContent="center"
          marginTop={16}
          onClick={toggle}
        >
          Cancel
        </Button>
      </Pane>
    </Pane>
  )
}

function PopupLogout({ active, toggle }) {
  return active
    ? ReactDOM.createPortal(<Popup toggle={toggle} />, document.body)
    : null
}

export default PopupLogout

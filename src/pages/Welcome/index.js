import React from 'react'
import { Link } from 'react-router-dom'
import { Pane, Heading, Button } from 'evergreen-ui'

import Layout from 'components/common/Layout'
import Header from 'components/common/Header'

function Welcome() {
  return (
    <Layout
      header={{
        component: <Header />,
      }}
    >
      <Pane
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading>Welcome to Sociozone</Heading>
      </Pane>
      <Pane
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link to="/login">
          <Button appearance="primary">Login</Button>
        </Link>
        <Link to="/register">
          <Button marginLeft={16}>Register</Button>
        </Link>
      </Pane>
    </Layout>
  )
}

export default Welcome

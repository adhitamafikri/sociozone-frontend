import React from 'react'
import { Pane, Heading, Button, Text } from 'evergreen-ui'

import Layout from 'components/common/Layout'
import Header from 'components/common/Header'
import Link from 'components/common/Link'

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
        <Text fontStyle="italic" marginTop={8}>
          {`Can't come up with a better name :'), duh`}
        </Text>
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

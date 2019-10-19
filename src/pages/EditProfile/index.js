import React from 'react'
import {
  Pane, TextInput, Text, Button,
} from 'evergreen-ui'

import Layout from 'components/common/Layout'
import Header from 'components/common/Header'
import Navigation from 'components/common/Navigation'

function EditProfile() {
  return (
    <Layout
      header={{
        component: <Header />,
      }}
      navigation={{
        component: <Navigation />,
      }}
    >
      <Pane display="flex" flexDirection="column" marginBottom={16}>
        <Text>
          <label htmlFor="name">Name</label>
        </Text>
        <TextInput id="name" name="name" width="100%" />
      </Pane>
      <Pane display="flex" flexDirection="column" marginBottom={16}>
        <Text>
          <label htmlFor="username">Username</label>
        </Text>
        <TextInput id="username" name="username" width="100%" />
      </Pane>
      <Pane display="flex" flexDirection="column" marginBottom={16}>
        <Text>
          <label htmlFor="website">Website</label>
        </Text>
        <TextInput id="website" name="website" width="100%" />
      </Pane>
      <Pane display="flex" flexDirection="column" marginBottom={16}>
        <Text>
          <label htmlFor="bio">Bio</label>
        </Text>
        <TextInput id="bio" name="bio" width="100%" />
      </Pane>

      <Button
        width="100%"
        justifyContent="center"
        marginTop={24}
      >
        Save
      </Button>
    </Layout>
  )
}

export default EditProfile

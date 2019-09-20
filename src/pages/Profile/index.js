import React from 'react'
import {
  Pane, Text, Paragraph, Link,
} from 'evergreen-ui'

import Layout from 'components/common/Layout'
import Header from 'components/common/Header'
import Navigation from 'components/common/Navigation'
import Image from 'components/common/Image'

import profileData from '__mocks__/profile'

function Profile() {
  return (
    <Layout
      header={{
        component: <Header />,
      }}
      navigation={{
        component: <Navigation />,
      }}
    >
      <Pane
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Pane
          width={70}
          height={70}
          borderRadius={50}
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          <Image src="https://i.ibb.co/tcWVbVP/Jorja-Smith.jpg" width="auto" height="100%" fit="cover" />
        </Pane>
        <Pane
          flex={1}
          marginLeft={16}
          display="flex"
          alignItems="center"
        >
          <Pane
            width="33%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin={4}
          >
            <Paragraph fontSize={16} fontWeight={500}>2</Paragraph>
            <Text fontSize={14} fontWeight={500}>Posts</Text>
          </Pane>
          <Pane
            width="33%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin={4}
            marginRight={8}
            marginLeft={8}
          >
            <Paragraph fontSize={16} fontWeight={500}>2</Paragraph>
            <Text fontSize={14} fontWeight={500}>Followers</Text>
          </Pane>
          <Pane
            width="33%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin={4}
          >
            <Paragraph fontSize={16} fontWeight={500}>2</Paragraph>
            <Text fontSize={14} fontWeight={500}>Following</Text>
          </Pane>
        </Pane>
      </Pane>
      <Pane
        display="flex"
        flexDirection="column"
      >
        <Text fontWeight={500} fontSize={18} marginTop={8} marginBottom={4}>
          {profileData.name}
        </Text>
        <Text fontWeight={500} marginTop={4} marginBottom={4}>
          {`@${profileData.username}`}
        </Text>
        <Paragraph marginTop={4} marginBottom={4}>
          {profileData.bio}
        </Paragraph>
        <Link href={profileData.website} fontSize={13}>
          {profileData.website}
        </Link>
      </Pane>
    </Layout>
  )
}

export default Profile

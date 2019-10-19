import React from 'react'
import { useLocation } from 'react-router-dom'

import Layout from 'components/common/Layout'
import Header from 'components/common/Header'
import Navigation from 'components/common/Navigation'

import PostCard from 'components/PostCard'

function ProfilePost() {
  const location = useLocation()
  const { post } = location.state

  return (
    <Layout
      header={{
        component: <Header />,
      }}
      navigation={{
        component: <Navigation />,
      }}
    >
      <PostCard
        key={post.id}
        user={post.user}
        photos={post.photos}
        content={post.content}
      />
    </Layout>
  )
}

export default ProfilePost

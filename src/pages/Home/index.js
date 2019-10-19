import React from 'react'

import Layout from 'components/common/Layout'
import Header from 'components/common/Header'
import Navigation from 'components/common/Navigation'

import PostCard from 'components/PostCard'

import timelineData from '__mocks__/timeline'

function renderTimeline() {
  return timelineData.map((post, idx) => (
    <PostCard
      key={`${post.id}-${idx}`}
      user={post.user}
      photos={post.photos}
      content={post.content}
    />
  ))
}

function Home() {
  return (
    <Layout
      header={{
        component: <Header />,
      }}
      navigation={{
        component: <Navigation />,
      }}
    >
      {renderTimeline()}
    </Layout>
  )
}

export default Home

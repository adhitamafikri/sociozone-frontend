import React from 'react'
import { Pane, Heading, Button } from 'evergreen-ui'

import Layout from 'components/common/Layout'
import Header from 'components/common/Header'
import Navigation from 'components/common/Navigation'
import Link from 'components/common/Link'

function Search() {
  return (
    <Layout
      header={{
        component: <Header />,
      }}
      navigation={{
        component: <Navigation />,
      }}
    >
      <Pane>Search</Pane>
    </Layout>
  )
}

export default Search

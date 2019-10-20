import React from 'react'
import {
  Pane, Text, SearchInput,
} from 'evergreen-ui'

import Layout from 'components/common/Layout'
import Header from 'components/common/Header'
import Navigation from 'components/common/Navigation'
import Link from 'components/common/Link'

import searchResult from '__mocks__/search-result'

function Result({ keyword }) {
  if (keyword) {
    const result = searchResult.filter((res) => res.username.toLowerCase().includes(keyword.toLowerCase()))

    return result.map((res) => (
      <Link key={res.id} to={`/user/${res.id}`}>
        <Pane width="100%" paddingTop={4} paddingBottom={4}>
          <Text fontWeight={500}>{`@${res.username}`}</Text>
        </Pane>
      </Link>
    ))
  }
  return null
}

function Search() {
  const [keyword, setKeyword] = React.useState('')
  const changeKeyword = (e) => setKeyword(e.target.value)

  return (
    <Layout
      header={{
        component: <Header />,
      }}
      navigation={{
        component: <Navigation />,
      }}
    >
      <SearchInput
        placeholder="Type username here... example @doritos"
        width="100%"
        value={keyword}
        onChange={changeKeyword}
      />

      <Pane marginTop={36}>
        <Result keyword={keyword} />
      </Pane>
    </Layout>
  )
}

export default Search

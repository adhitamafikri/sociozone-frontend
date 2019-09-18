import React from 'react'
import { Link } from 'react-router-dom'
import {
  Pane,
  Heading,
  TextInput,
  Button,
} from 'evergreen-ui'

import Layout from 'components/common/Layout'
import Header from 'components/common/Header'
import Navigation from 'components/common/Navigation'

import { postLogin } from 'services/auth'

function Login() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('submitting form', username, password)
    postLogin({ username, password })
  }

  return (
    <Layout
      header={{
        component: <Header />,
      }}
      navigation={{
        component: <Navigation />,
      }}
    >
      <Heading is="h1">Sociozone Login</Heading>

      <Pane>
        <form method="POST" onSubmit={handleFormSubmit} autoComplete="off">
          <Pane marginTop={16} marginBottom={16}>
            <label htmlFor="uname">Username</label>
            <TextInput
              width="100%"
              marginTop={8}
              type="text"
              placeholder="username"
              name="username"
              id="uname"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Pane>

          <Pane marginTop={16} marginBottom={16}>
            <label htmlFor="pwd">Password</label>
            <TextInput
              width="100%"
              marginTop={8}
              type="password"
              placeholder="username"
              name="password"
              id="pwd"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Pane>

          <Button
            appearance="primary"
            intent="success"
            width="100%"
            type="submit"
            justifyContent="center"
            marginBottom={16}
          >
            Submit
          </Button>
        </form>
        <Link to="/register">
          <Button width="100%" justifyContent="center">
            Register
          </Button>
        </Link>
      </Pane>
    </Layout>
  )
}

export default Login

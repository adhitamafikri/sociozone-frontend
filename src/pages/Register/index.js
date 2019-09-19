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

import { postRegistration } from 'services/auth'

function Register() {
  const [name, setName] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('submitting form', username, password)
    postRegistration({ name, username, password })
  }

  return (
    <Layout
      header={{
        component: <Header />,
      }}
    >
      <Heading is="h1">Sociozone Registration</Heading>

      <form method="POST" onSubmit={handleFormSubmit} autoComplete="off">
        <Pane marginTop={16} marginBottom={16}>
          <label htmlFor="fulluname">Name</label>
          <TextInput
            width="100%"
            marginTop={8}
            type="text"
            placeholder="Name"
            name="name"
            id="fullname"
            onChange={(e) => setName(e.target.value)}
          />
        </Pane>
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
          type="submit"
          width="100%"
          justifyContent="center"
          marginBottom={16}
        >
          Register
        </Button>
      </form>

      <Link to="/login">
        <Button width="100%" justifyContent="center">
          Login
        </Button>
      </Link>
    </Layout>
  )
}

export default Register

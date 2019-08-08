import React from 'react'
import Flex from '../../components/common/Flex'

import { postRegistration } from '../../services/auth'

function Register() {
  const [name, setName] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log('submitting form', username, password)
    postRegistration({ name, username, password })
  }

  return (
    <div>
      Sociozone Login
      <form method="POST" onSubmit={handleFormSubmit} autoComplete="off">
        <Flex direction="column">
          <Flex>
            <label htmlFor="fulluname">Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="fullname"
              onChange={e => setName(e.target.value)}
            />
          </Flex>
          <Flex>
            <label htmlFor="uname">Username</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              id="uname"
              onChange={e => setUsername(e.target.value)}
            />
          </Flex>
          <Flex>
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              placeholder="username"
              name="password"
              id="pwd"
              onChange={e => setPassword(e.target.value)}
            />
          </Flex>
        </Flex>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Register

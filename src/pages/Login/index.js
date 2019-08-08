import React from 'react'

import { postLogin } from '../../services/auth'

function Login() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log('submitting form', username, password)
    postLogin({ username, password })
  }

  return (
    <div>
      Sociozone Login
      <form method="POST" onSubmit={handleFormSubmit} autoComplete="off">
        <label htmlFor="uname">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="uname"
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          placeholder="username"
          name="password"
          id="pwd"
          onChange={e => setPassword(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login

import React from 'react'

const UserPost = () => {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log(username, email, password)
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password,
      })
    }).then(response => {
      console.log(response)
      return response.json()
    })
      .then(rq => {
        console.log(rq)
        return rq
      }
      )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Enter username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input type="email"
        placeholder="Enter email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input type="password"
        placeholder="Enter password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
    </form>
  )
}

export default UserPost
import { useState } from 'react'
import axios from 'axios'

import { urlUser } from './constants'
import { User } from './types'

const MockServer = () => {
  const [fetched, setFetched] = useState(false)
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const buttonText = fetched ? 'Loaded' : 'Start Fetch'

  const fetchUser = async () => {
    axios
      .get(urlUser)
      .then(res => {
        const user: User = res.data as User
        setUsername(user.username)
        setFetched(true)
      })
      .catch(() => {
        setError('Fetching Failed !')
      })
  }

  return (
    <div>
      <button onClick={fetchUser} disabled={fetched}>
        {buttonText}
      </button>
      {username && <h3>{username}</h3>}
      {error && <p data-testid='error'>{error}</p>}
    </div>
  )
}

export default MockServer

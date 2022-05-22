import { useState, useEffect } from 'react'
import axios from 'axios'

import { urlUser } from './constants'
import { User } from './types'

const RenderUseEffect = () => {
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(urlUser)
      const user: User = res.data as User
      setUser(user)
    }
    fetchUser()
  }, [])

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </div>
  )
}

export default RenderUseEffect

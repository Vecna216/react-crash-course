import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Users() {
  const { id } = useParams()
  const [user, setUser] = useState({})

  async function fetchUser() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(data)
    setUser(data)
  }

  useEffect(() => {
    fetchUser(); 
  }, [])
  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>{ user.id }</h1>
      <h1>{ user.name }</h1>
      <h1>{ user.email }</h1>
      <h1>{ user.username }</h1>
    </div>
  )
}

export default Users
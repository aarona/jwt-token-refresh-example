import React from 'react'
import { Link } from 'react-router-dom'
import { useMeQuery, useLogoutMutation } from '../generated/graphql'
import { setAccessToken } from '../accessToken'

interface Props {

}

export const Header: React.FC<Props> = () => {
  const { data, loading } = useMeQuery()
  const [logout, { client }] = useLogoutMutation()
  
  let body: any = null
  let loggedIn = false

  if (loading) {
    body = null
  } else if (data && data.me) {
    loggedIn = true
    body = <div>You are logged in as: {data.me.email}</div>
  } else {
    body = <div>You are not logged in.</div>
  }
  return <header>
    <div><Link to="/">Home</Link></div>
    {loggedIn ? "" : <div><Link to="/register">Register</Link></div>}
    {loggedIn ? "" : <div><Link to="/login">Login</Link></div>}
    <div><Link to="/protected">Protected Page</Link></div>
    {loggedIn ? (<div>
      <button onClick={async () => {
        await logout()
        setAccessToken("")
        await client!.resetStore()
      }}>Log out</button></div>
    ) : (
      ""
    )}
    { body }
  </header>
}
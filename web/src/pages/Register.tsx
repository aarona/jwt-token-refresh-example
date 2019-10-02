import React, { useState } from 'react'
import { useRegisterMutation, MeQuery, MeDocument } from '../generated/graphql'
import { RouteComponentProps } from 'react-router'
import { setAccessToken } from '../accessToken'

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [register] = useRegisterMutation()
  return <>
    <h1>Register Page</h1>
    <form onSubmit={async e => {
      e.preventDefault()
      console.log('form submitted')
      const response = await register({
        variables: {
          email,
          password
        },
        /*update: (store, { data }) => {
          if (!data) {
            return null
          }
          store.writeQuery<MeQuery>({
            query: MeDocument,
            data: {
              me: data.register.user
            }
          })
        }*/
      })

      console.log(response)
/*
      if (response && response.data) {
        setAccessToken(response.data.register.accessToken)
      }
*/
      history.push('/')
    }}>
      <div>
        <input value={email} placeholder="Email" onChange={e => {
          setEmail(e.target.value)
        }} />
      </div>
      <div>
        <input value={password} placeholder="Password" type="password" onChange={e => {
          setPassword(e.target.value)
        }}/>
      </div>
      <button type="submit">Register</button>
    </form>
  </>
}
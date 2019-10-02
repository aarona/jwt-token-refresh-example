import React from 'react'
import { useProtectedQuery } from '../generated/graphql'
import { Redirect } from 'react-router'

interface Props {

}

export const Protected: React.FC<Props> = () => {
  const { data, loading, error } = useProtectedQuery({fetchPolicy: 'network-only'})

  if (error) {
    console.log(error)
    return <Redirect to={'/'} />
  }

  if(loading) {
    return <div>Loading...</div>
  }

  if(!data) {
    return <div>No data found.</div>
  }

  return (<div>Protected Page Visible! {data.protected}</div>)
}
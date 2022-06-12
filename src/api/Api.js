import React from 'react'
import TokenPost from './endpoint/TokenPost'
import UserPost from './endpoint/UserPost'

const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <h2>TOKEN POST</h2>
      <TokenPost />
    </div>
  )
}

export default Api
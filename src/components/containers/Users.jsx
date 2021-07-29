import React, { useContext } from 'react'
import CardUser from '../molecules/CardUser'
import { findUsers } from '../../service/user'
import { useQuery } from 'react-query'
import { AuthContext } from '../../context/AuthProvider'

export default function Users({ openModal }) {
  const { user } = useContext(AuthContext)
  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery('findUsers', async () => await findUsers({ token: user?.token }))

  return (
    <>
      <div>
        <input type="text" placeholder="Buscar" className="rounded-lg" />
      </div>
      <div className="flex flex-wrap gap-x-8">
        {isLoading ? (
          <p>Loading</p>
        ) : error || isError ? (
          <p>ocurrio un error</p>
        ) : (
          users &&
          users.map((user, i) => (
            <CardUser key={i} openModal={openModal} user={user} />
          ))
        )}
      </div>
    </>
  )
}

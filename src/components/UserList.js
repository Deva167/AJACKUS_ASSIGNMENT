import React, {useEffect, useState} from 'react'
import {fetchUsers, deleteUser} from '../api/apiClient'
import UserItem from './UserItem'

const UserList = ({onEdit}) => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
      .then(response => setUsers(response.data))
      .catch(() => setError('Failed to fetch users'))
  }, [])

  const handleDelete = id => {
    deleteUser(id)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(() => alert('Error deleting user'))
  }

  if (error) return <div>{error}</div>

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <UserItem
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default UserList

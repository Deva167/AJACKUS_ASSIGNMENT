import React, {useState} from 'react'
import UserList from './components/UserList'
import UserForm from './components/UserForm'

const App = () => {
  const [editingUser, setEditingUser] = useState(null)

  const handleSuccess = () => {
    setEditingUser(null)
    // You might need to reload user data after a successful operation
  }

  return (
    <div>
      <h1>User Management</h1>
      {editingUser ? (
        <UserForm existingUser={editingUser} onSuccess={handleSuccess} />
      ) : (
        <UserForm onSuccess={handleSuccess} />
      )}
      <UserList onEdit={user => setEditingUser(user)} />
    </div>
  )
}

export default App

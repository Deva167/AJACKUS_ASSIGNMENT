import React, {useState} from 'react'
import {addUser, updateUser} from '../api/apiClient'

const UserForm = ({existingUser, onSuccess}) => {
  const [formData, setFormData] = useState(
    existingUser || {firstName: '', lastName: '', email: '', department: ''},
  )

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const apiCall = existingUser
      ? updateUser(existingUser.id, formData)
      : addUser(formData)

    apiCall.then(() => onSuccess()).catch(() => alert('Error submitting form'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <button type="submit">{existingUser ? 'Update' : 'Add'} User</button>
    </form>
  )
}

export default UserForm

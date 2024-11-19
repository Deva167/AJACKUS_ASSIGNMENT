import React from 'react'

const UserItem = ({user, onEdit, onDelete}) => (
  <div>
    <p>
      <strong>
        {user.firstName} {user.lastName}
      </strong>{' '}
      - {user.email} ({user.department})
    </p>
    <button  onClick={() => onEdit(user)}>Edit</button>
    <button  onClick={() => onDelete(user.id)}>Delete</button>
  </div>
)

export default UserItem

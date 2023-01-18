import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAdded } from './usersSlice'
import { UsersList } from './UsersList'

  export default function AddUserForm() {
  const [username, setUserName] = useState('')

  const dispatch = useDispatch()

  const onUserChanged = e => setUserName(e.target.value) 

  const onSaveUserClicked = () => {
    
      dispatch(userAdded(username))
      setUserName('')
    
  }

  const canSave = Boolean(username)

  return (
    <section>
      <h2>Add a New User</h2>
      <form>
        <label htmlFor="username">User Name:</label>
        <input
          type="text"
          id="addUserName"
          name="addUserName"
          value={username}
          onChange={onUserChanged}
        />
        <button type="button" onClick={onSaveUserClicked} disabled={!canSave}>
            Save User
        </button>
      </form>
      
    </section>
  )
}
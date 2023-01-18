import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function UsersList() {
  const users = useSelector(state => state.users)
  .map(user => (
    <>
      <tr key={user.id}>
        <td>{user.username}</td>
        <td>Read</td>
        <td>Update</td>
        <td>Delete</td>
      </tr>
    </>
  ))

return (
  <section>
    <Link to='/adduser'>Create user</Link>
    <h4>Users</h4>
    <table>
      <tr>
        <th>username</th>
        <th>read</th>
        <th>update</th>
        <th>delete</th>
      </tr>
    
    {users} 
    </table>   
  </section>
)
}
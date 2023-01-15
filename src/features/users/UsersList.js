import { useSelector } from 'react-redux'

export const UsersList = () => {
  const users = useSelector(state => state.users)
  .map(user => (
    <article key={user.id}>
      <h3>{user.username}</h3>
    </article>
  ))

return (
  <section>
    <h2>Users</h2>
    {users}    
  </section>
)
}
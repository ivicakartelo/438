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
    <h1>Admin</h1>
    <Link to="/posts">Posts</Link> | {" "}
    <Link to="/users">Users</Link> | {" "}
    <Link to="/comments">Comments</Link> | {" "}
    <Link to="/Replies">Replies</Link> | {" "}
    <Link to="/replies1">replies1</Link> | {" "}
    <Link to="/addpost">Create post</Link>{" "}<br />
    <Link to='/adduser'>Create user</Link>
    <h4>Users</h4>
    <table className="table table-striped">
        <thead>
          <tr>
          <th>username</th>
          <th>read</th>
          <th>update</th>
          <th>delete</th>
          </tr>
        </thead>
        <tbody>
    {users}
    </tbody>
    </table>   
  </section>
)
}
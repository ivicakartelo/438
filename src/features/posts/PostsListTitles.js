import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { postDelete } from './postsSlice'

export default function PostsListTitles() {
const posts = useSelector(state => state.posts)
  const dispatch = useDispatch();
  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

    const postRemove = (id) => {
      dispatch(postDelete({ id }));
    }

    
  const renderedPosts = orderedPosts.map(post => (
    <>
  <tr key={post.id}>
    <td>{post.id}</td>
    <td>{post.title}</td>
    <td>{post.content}</td>
    <td>{post.user}</td>
    <td>{post.date}</td>
    <td><Link to={`/posts/${post.id}`}>Read</Link></td>
    <td><Link to={`/editPost/${post.id}`}>Update</Link></td>
    <td><Link onClick={()=>postRemove(post.id)}>Delete</Link></td>
  </tr>
  
    </>

  ))

return (
  <>
  <h1>Admin</h1>
    <Link to="/posts">Posts</Link> | {" "}
    <Link to="/users">Users</Link> | {" "}
    <Link to="/comments">Comments</Link> | {" "}
    <Link to="/Replies">Replies</Link> | {" "}
    <Link to="/replies1">replies1</Link> | {" "}<br />
    <Link to="/addpost">Create post</Link>{" "}

  <table className="table table-striped">
    <thead>
    <tr>
    <th>id</th>
    <th>title</th>
    <th>content</th>
    <th>user</th>
    <th>date</th>
    <th>read</th>
    <th>update</th>
    <th>delete</th>
    </tr>
    </thead>
    <tbody>
      {renderedPosts}
    </tbody>
  </table>             
  </>
)
}
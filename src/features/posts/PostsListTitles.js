import { useLocation, NavLink, Outlet, useSearchParams } from "react-router-dom";
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
    <article key={post.id}>
      <h3>{post.title}</h3>
      <Link to={`/posts/${post.id}`}>Read</Link>{" "}<br />
      <Link to={`/editPost/${post.id}`}>Update</Link>{" "}<br />
      <Link onClick={()=>postRemove(post.id)}>Delete</Link>{" "}
    </article>
  ))

return (
  <div style={{ display: 'flex' }}>
    <Link to="/addpost">Create</Link>{" "}<br />
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
      <Link to="/posts">Posts</Link><br />
    
    {renderedPosts}
    
  </nav>
  <Outlet />
  </div>
)
}
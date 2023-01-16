import { useLocation, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
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
      <Link to={`/posts/${post.id}`}>
      <h3>{post.title}</h3>
      </Link>

      <Link to={`/editPost/${post.id}`}>
      <h3>Edit</h3>
      </Link>
      
      
      
    </article>
  ))

return (
  <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
    <h2>Posts</h2>
    {renderedPosts}
    
  </nav>
  <Outlet />
  </div>
)
}
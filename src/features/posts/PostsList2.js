import { useLocation, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { postDelete } from './postsSlice'

export default function PostsList() {
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
      <h4>{post.title}</h4>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <p>{post.content.substring(0, 700)}</p>
      <ReactionButtons post={post} />
      <Link to={`/post/${post.id}`}>Read</Link>{" "}
      
    </article>
  ))

return (
  <div>
    <h4>Posts</h4>
    {renderedPosts}
  </div>
)
}
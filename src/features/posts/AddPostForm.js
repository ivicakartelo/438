import { useState } from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import { postAdded } from './postsSlice'
import PostsList1 from "./PostsList1";
import { useLocation, NavLink, Outlet, useSearchParams } from "react-router-dom";

  export default function AddPostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  const onTitleChanged = e => setTitle(e.target.value) 
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
      setUserId('')
    }
  }
  
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.username}
    </option>
  ))

  return (
    
    
    <section>

<div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
      

      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postAuthor">Author:</label>
        
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}         
        </select>
        
        <label htmlFor="postContent">Content:</label>
        <textarea
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            Save Post
        </button>
      </form>
      
      </nav>
      <div style={{ display: 'flex' }}>
        <PostsList1 />
      </div>
      </div>
      
      
    </section>
  )
}
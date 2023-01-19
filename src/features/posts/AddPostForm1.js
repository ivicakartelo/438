import { useState } from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import { postAdded } from './postsSlice'
import PostsList2 from "./PostsList2"
import { FormGroup, Input, Button } from 'reactstrap'

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
    <section className="container">
      <h1>Home</h1>
      <h4>Add a New Post</h4>
      <form>
        <FormGroup>
        <label htmlFor="postTitle">Post Title:</label>
        
          <Input
          type="text"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        </FormGroup>
        <FormGroup>
          <label htmlFor="postAuthor">Author:</label>
          <Input type="select" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}         
        </Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="postContent">Content:</label>
        <Input
        placeholder="What's on your mind?"
          value={content}
          onChange={onContentChanged}
        />
        </FormGroup>
        <Button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            Save Post
        </Button>
        
      </form>
        <PostsList2 />
    </section>
  )
}
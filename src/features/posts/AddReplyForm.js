import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { replyAdded } from '../replies/repliesSlice'

  export const AddReplyForm = ({commentId}) => {
  
  const [author, setAuthor] = useState('')
  const [reply, setReply] = useState('')
  
  const dispatch = useDispatch()

  const onAuthorChanged = e => setAuthor(e.target.value)
  const onReplyChanged = e => setReply(e.target.value)
 
  const onSaveReplyClicked = () => {
    if (author && reply) {
      dispatch(replyAdded( commentId, author, reply))
      setAuthor('')
      setReply('')
    }
  }
  
  const canSave = Boolean(author) && Boolean(reply)
  
  return (
    <section>
      <h2>Add a New Reply</h2>
      
      <form>
        <label>Author:</label>
        
        <input
          type="text"
          id="replyAuthor"
          name="replyAuthor"
          value={author}
          onChange={onAuthorChanged}
        />
        
        <label>Reply Text</label>
        <textarea
          id="replytext"
          name="replytext"
          value={reply}
          onChange={onReplyChanged}
        />

        <button type="button" onClick={onSaveReplyClicked} disabled={!canSave}>
            Save Reply
        </button>
      </form>
    </section>
  )
}
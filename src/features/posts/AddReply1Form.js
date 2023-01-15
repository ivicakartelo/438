import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { reply1Added } from '../replies1/replies1Slice'

  export const AddReply1Form = ({replyId}) => {
  
  const [author, setAuthor] = useState('')
  const [reply1, setReply1] = useState('')
  
  const dispatch = useDispatch()

  const onAuthorChanged = e => setAuthor(e.target.value)
  const onReply1Changed = e => setReply1(e.target.value)
 
  const onSaveReply1Clicked = () => {
    if (author && reply1) {
      dispatch(reply1Added( replyId, author, reply1))
      setAuthor('')
      setReply1('')
    }
  }
  
  const canSave = Boolean(author) && Boolean(reply1)
  
  return (
    <section>
      <h2>Add a New Reply1</h2>
      
      <form>
        <label>Author:</label>
        
        <input
          type="text"
          id="replyAuthor"
          name="replyAuthor"
          value={author}
          onChange={onAuthorChanged}
        />
        
        <label>Reply1 Text</label>
        <textarea
          id="reply1text"
          name="reply1text"
          value={reply1}
          onChange={onReply1Changed}
        />

        <button type="button" onClick={onSaveReply1Clicked} disabled={!canSave}>
            Save Reply1
        </button>
      </form>
    </section>
  )
}
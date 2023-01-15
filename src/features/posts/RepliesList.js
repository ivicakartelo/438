import { useSelector } from 'react-redux'
import { AddReply1Form } from './AddReply1Form'
import { Replies1List } from './Replies1List'

export const RepliesList = ({ commentId }) => {
  const replies = useSelector(state => state.replies)
  .filter(reply => reply.comment === commentId)  
  .map(reply => (
    <article key={reply.replyId}>
      <h1>{reply.date}</h1>
      <h3>{reply.author}</h3>
      <p>{reply.reply}</p>
      <div style={{ marginLeft: '50px', paddingBottom: '1rem' }}>
      <AddReply1Form replyId={reply.replyId} />
      <Replies1List replyId={reply.replyId} />
      </div>
      
    </article>
  ))
return (
  <section>
    <h2>Replies:</h2>
    {replies}    
  </section>
)
}
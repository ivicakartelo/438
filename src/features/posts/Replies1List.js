import { useSelector } from 'react-redux'

export const Replies1List = ({ replyId }) => {
  const replies1 = useSelector(state => state.replies1)
  .filter(reply1 => reply1.reply === replyId)  
  .map(reply1 => (
    <article key={reply1.reply1Id}>
      <h1>{reply1.date}</h1>
      <h3>{reply1.author}</h3>
      <p>{reply1.reply1}</p>
      
    </article>
  ))
return (
  <section>
    <h2>Replies1:</h2>
    {replies1}    
  </section>
)
}
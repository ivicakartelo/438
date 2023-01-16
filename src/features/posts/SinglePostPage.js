import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { AddCommentForm } from './AddCommentForm'
import { CommentsList } from './CommentsList'
import { useParams } from "react-router-dom"



export default function SinglePostPage() {

  const params = useParams()

  const postId = params.postId

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article>
        
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <p>{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`}>
          Edit Post
        </Link>
        
        
        <AddCommentForm postId={post.id} />
        <CommentsList post={post.id} />
      </article>
    </section>
  )
}
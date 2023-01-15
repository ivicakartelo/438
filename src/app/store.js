import { configureStore } from '@reduxjs/toolkit'
import counter1Reducer from '../features/counter1/counter1Slice'
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import commentsReducer from '../features/comments/commentsSlice'
import repliesReducer from '../features/replies/repliesSlice'
import replies1Reducer from '../features/replies1/replies1Slice'

export const store = configureStore({
  reducer: {
    counter1: counter1Reducer,
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
    replies: repliesReducer,
    replies1: replies1Reducer
  }
})
console.log(store.getState())
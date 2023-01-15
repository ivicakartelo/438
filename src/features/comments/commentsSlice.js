import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    commentId: '0',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    post: '0',
    rating: '4',
    author: 'Seth Godin',
    comment: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Proin orci ligula, fringilla ac venenatis a, aliquam a magna. Donec vitae nisi nec enim fermentum gravida. Cras placerat aliquam mi, eget faucibus sem hendrerit non. Aenean nec mauris efficitur, tincidunt tortor non, pretium augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus ultrices massa in aliquet. In at tellus sit amet nibh eleifend semper non sit amet tortor. Mauris non facilisis tortor, vel volutpat eros. Donec id varius dui nec eleifend augue Nullam ligula eros, finibus id turpis eu imperdiet lobortis mauris Suspendisse turpis sem accumsan sed porta sit amet egestas ut ante Mauris non mauris tincidunt viverra nibh et lobortis ante'
  },
  {
    commentId: '1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    post: '1',
    rating: '3',
    author: 'John Jovy',
    comment: 'Ipsum dolor sit amet consectetur adipiscing elit Proin orci ligula, fringilla ac venenatis a, aliquam a magna. Donec vitae nisi nec enim fermentum gravida. Cras placerat aliquam mi, eget faucibus sem hendrerit non. Aenean nec mauris efficitur, tincidunt tortor non, pretium augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus ultrices massa in aliquet. In at tellus sit amet nibh eleifend semper non sit amet tortor. Mauris non facilisis tortor, vel volutpat eros. Donec id varius dui nec eleifend augue Nullam ligula eros, finibus id turpis eu imperdiet lobortis mauris Suspendisse turpis sem accumsan sed porta sit amet egestas ut ante Mauris non mauris tincidunt viverra nibh et lobortis ante'
  }
]

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
    
    prepare( postId, rating, author, comment ) {
    return {
        payload: {
        commentId: nanoid(),
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        post: postId,
        rating,
        author,
        comment
        },
      }
    },
  },
}})

export const { commentAdded } = commentsSlice.actions

export default commentsSlice.reducer
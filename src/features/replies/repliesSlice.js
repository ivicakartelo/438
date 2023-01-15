import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    replyId: '0',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    comment: '0',
    author: 'Ivy Mer',
    reply: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Proin orci ligula, fringilla ac venenatis a, aliquam a magna. Donec vitae nisi nec enim fermentum gravida. Cras placerat aliquam mi, eget faucibus sem hendrerit non. Aenean nec mauris efficitur, tincidunt tortor non, pretium augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus ultrices massa in aliquet. In at tellus sit amet nibh eleifend semper non sit amet tortor. Mauris non facilisis tortor, vel volutpat eros. Donec id varius dui nec eleifend augue Nullam ligula eros, finibus id turpis eu imperdiet lobortis mauris Suspendisse turpis sem accumsan sed porta sit amet egestas ut ante Mauris non mauris tincidunt viverra nibh et lobortis ante'
  },
  {
    replyId: '1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    comment: '1',
    author: 'Ley Conors',
    reply: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Proin orci ligula, fringilla ac venenatis a, aliquam a magna. Donec vitae nisi nec enim fermentum gravida. Cras placerat aliquam mi, eget faucibus sem hendrerit non. Aenean nec mauris efficitur, tincidunt tortor non, pretium augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus ultrices massa in aliquet. In at tellus sit amet nibh eleifend semper non sit amet tortor. Mauris non facilisis tortor, vel volutpat eros. Donec id varius dui nec eleifend augue Nullam ligula eros, finibus id turpis eu imperdiet lobortis mauris Suspendisse turpis sem accumsan sed porta sit amet egestas ut ante Mauris non mauris tincidunt viverra nibh et lobortis ante'
  }
]

const repliesSlice = createSlice({
  name: 'replies',
  initialState,
  reducers: {
    replyAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
    prepare( commentId, author, reply ) {
    return {
        payload: {
        replyId: nanoid(),
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        comment: commentId,
        author,
        reply
        },
      }
    },
  },
}})

export const { replyAdded } = repliesSlice.actions

export default repliesSlice.reducer
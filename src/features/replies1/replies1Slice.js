import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    reply1Id: '0',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reply: '0',
    author: 'Viel Kohr',
    reply1: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Proin orci ligula, fringilla ac venenatis a, aliquam a magna. Donec vitae nisi nec enim fermentum gravida. Cras placerat aliquam mi, eget faucibus sem hendrerit non. Aenean nec mauris efficitur, tincidunt tortor non, pretium augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus ultrices massa in aliquet. In at tellus sit amet nibh eleifend semper non sit amet tortor. Mauris non facilisis tortor, vel volutpat eros. Donec id varius dui nec eleifend augue Nullam ligula eros, finibus id turpis eu imperdiet lobortis mauris Suspendisse turpis sem accumsan sed porta sit amet egestas ut ante Mauris non mauris tincidunt viverra nibh et lobortis ante'
  },
  {
    reply1Id: '1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reply: '0',
    author: 'Iqir Wolker',
    reply1: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Proin orci ligula, fringilla ac venenatis a, aliquam a magna. Donec vitae nisi nec enim fermentum gravida. Cras placerat aliquam mi, eget faucibus sem hendrerit non. Aenean nec mauris efficitur, tincidunt tortor non, pretium augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus ultrices massa in aliquet. In at tellus sit amet nibh eleifend semper non sit amet tortor. Mauris non facilisis tortor, vel volutpat eros. Donec id varius dui nec eleifend augue Nullam ligula eros, finibus id turpis eu imperdiet lobortis mauris Suspendisse turpis sem accumsan sed porta sit amet egestas ut ante Mauris non mauris tincidunt viverra nibh et lobortis ante'
  }
]

const replies1Slice = createSlice({
  name: 'replies1',
  initialState,
  reducers: {
    reply1Added: {
      reducer(state, action) {
        state.push(action.payload)
      },
    prepare( replyId, author, reply1 ) {
    return {
        payload: {
        reply1Id: nanoid(),
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reply: replyId,
        author,
        reply1
        },
      }
    },
  },
}})

export const { reply1Added } = replies1Slice.actions

export default replies1Slice.reducer
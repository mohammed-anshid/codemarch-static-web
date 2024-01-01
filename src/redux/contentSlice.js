import { createSlice } from '@reduxjs/toolkit'

export const contentSlice = createSlice({
    name: 'Content',
    initialState: {
        content: null
    },

    reducers: {
        contentDetails:(state,action) => {
            state.content = action.payload
        }
    }
})

export const { contentDetails } = contentSlice.actions
export default contentSlice;
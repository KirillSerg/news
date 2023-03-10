import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { News } from '../../types'

interface NewsStore {
  news: News[];
}

const initialState: NewsStore = {
  news: []
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchAllNews: (state, action: PayloadAction<News[]>) => {
      state.news = action.payload
    },
  },
})

export default newsSlice.reducer
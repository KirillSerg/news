import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SearchTxtStore {
  searchText: string;
}

const initialState: SearchTxtStore = {
  searchText: ""
}

export const searchTxtSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setSearchTxt: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
  },
})

export default searchTxtSlice.reducer
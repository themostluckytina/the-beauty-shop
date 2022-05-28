import { createSlice } from '@reduxjs/toolkit';

export const beautySlice = createSlice({
    name: 'beauty',
    initialState: {
        selectedCategory: 'ВСЕ'

    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
          },
    }

})

export const getSelectedCategory = state=> state.beauty.selectedCategory;
export const { filterCategory } = beautySlice.actions
export default beautySlice.reducer;
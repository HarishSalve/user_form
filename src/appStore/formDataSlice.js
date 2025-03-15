import { createSlice } from '@reduxjs/toolkit';

const formDataSlice = createSlice({
  name: 'formData',
  initialState: [],
  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
    },
    updateData: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addData, updateData } = formDataSlice.actions;
export default formDataSlice.reducer;
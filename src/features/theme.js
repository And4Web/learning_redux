import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {value: initialStateValue},
  reducers: {
    themeChange: (state, action)=>{
      state.value = action.payload;
    }
  }
})

export const {themeChange} = themeSlice.actions;

export default themeSlice.reducer;

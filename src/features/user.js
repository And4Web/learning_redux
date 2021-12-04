import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {value:{name: "", age: 0, email: ""}},
  reducers: {
    login: (state, action)=>{
      state.value = action.payload;
    }
  }
})

export const {login} = userSlice.actions;

export default userSlice.reducer;

//we are creating user slices here in user reducer, which creates a state named user with value as initial state. we can access it using state.user.value in components and passing it as user.name, user.age, user.email etc.
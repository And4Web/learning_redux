import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {name: "", age: 0, email: ""};

export const userSlice = createSlice({
  name: "user",
  initialState: {value: initialStateValue},
  reducers: {
    login: (state, action)=>{
      state.value = action.payload;
    },
    logout: (state) => {state.value = initialStateValue}
  }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;

//we are creating user slices here in user reducer, which creates a state named user with value as initial state. we can access it using state.user.value in components and passing it as user.name, user.age, user.email etc.
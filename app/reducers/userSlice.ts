import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login() {},
    getUser() {},
    setUser(state, action) {
      const data = action.payload;

      return {...state, ...data.user, isLogged: true};
    },
  },
});

export const {login, setUser, getUser} = userSlice.actions;
export default userSlice.reducer;

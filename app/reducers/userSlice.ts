import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  isLoading: false,
  isError: false,
  errorMessage: '',
  email: '',
  firstname: '',
  lastname: '',
  city: '',
  state: '',
  country: '',
  dob: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, _) {
      return {...state, isLoading: true};
    },
    logout() {},
    saveUser() {},
    saveProfile(state, _) {
      return {...state, isLoading: true}
    },
    saveProfileSuccess(state, _) {
      return {...state, isLoading: false}
    },
    logoutSuccess(state, _) {
      return {...state, isLogged: false, isLoading: false};
    },
    loginSuccess(state, action) {
      const data = action.payload;

      return {...state, ...data.user, isLoading: false, isLogged: true};
    },
    getUser(state, _) {
      return {...state, isLoading: true};
    },
    setUser(state, action) {
      const data = action.payload;

      return {...state, ...data.user};
    },
    setError(state, action) {
      return {...state, ...action.payload};
    },
  },
});

export const {
  login,
  loginSuccess,
  logout,
  logoutSuccess,
  setUser,
  getUser,
  saveUser,
  saveProfile,
  saveProfileSuccess,
  setError,
} = userSlice.actions;
export default userSlice.reducer;

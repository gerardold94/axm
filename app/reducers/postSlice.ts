import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  isError: false,
  isLoading: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPosts(state, _) {
      return {...state, isLoading: true};
    },
    sucessGetPosts(state, action) {
      const posts = action.payload;

      return {...state, isLoading: false, isError: false, posts};
    },
  },
});

export const {getPosts, sucessGetPosts} = postSlice.actions;
export default postSlice.reducer;

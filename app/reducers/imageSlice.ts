import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  filename:
    'https://alanxelmundo.s3.us-east-2.amazonaws.com/fgGbnwxxOMKprtUf.jpeg',
  title: 'Guanajuato de noche',
  author: '-',
  place: 'Guanajuato Capital',
  photo_date: new Date().toISOString(),
  isLoading: false,
  isError: false,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    getImage(state, _) {
      return {...state, isLoading: true};
    },
    likeImage() {},
    imageSuccess(state, action) {
      const data = action.payload;

      return {...state, ...data, isLoading: false, isError: false};
    },
    imageError(state, _) {
      return {...state, isLoading: false, isError: true};
    },
  },
});

export const {getImage, likeImage, imageSuccess, imageError} =
  imageSlice.actions;
export default imageSlice.reducer;

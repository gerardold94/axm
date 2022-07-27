import {imageError, imageSuccess} from '@/reducers/imageSlice';
import {requestImage, requestLikeImage} from '@/sagas/requests/image';
import { AxiosResponse } from 'axios';
import {call, put} from 'redux-saga/effects';

export function* handleGetImage() {
  try {
    const response: AxiosResponse = yield call(requestImage);
    const {data} = response;

    yield put(imageSuccess({...data}));
  } catch (e) {
    yield put(imageError({}));
  }
}

export function* handleLikeImage(action: any) {
  try {
    const {like, image_id} = action.payload;
    const response: AxiosResponse = yield call(requestLikeImage, image_id, like);
    const {data} = response;

    yield put(imageSuccess({...data}));
  } catch (e) {
    console.log(e);
  }
}

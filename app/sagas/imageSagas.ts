import {takeLatest, all} from 'redux-saga/effects';
import {getImage, likeImage} from '@/reducers/imageSlice';
import {handleGetImage, handleLikeImage} from '@/sagas/handlers/image';

export default function* imagesSaga() {
  yield all([
    takeLatest(getImage.type, handleGetImage),
    takeLatest(likeImage.type, handleLikeImage),
  ]);
}

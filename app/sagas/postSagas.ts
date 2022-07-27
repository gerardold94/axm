import {takeLatest} from 'redux-saga/effects';
import {getPosts} from '@/reducers/postSlice';
import {handleGetPosts} from '@/sagas/handlers/post';

export default function* postSaga() {
  yield takeLatest(getPosts.type, handleGetPosts);
}

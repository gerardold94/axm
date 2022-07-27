import {call, put} from 'redux-saga/effects';
import {sucessGetPosts} from '@/reducers/postSlice';
import {requestPosts} from '@/sagas/requests/post';

export function* handleGetPosts() {
  try {
    const response = yield call(requestPosts);
    const {data} = response;

    yield put(sucessGetPosts(data));
  } catch (e) {
    console.log(e);
  }
}

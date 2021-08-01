import {takeLatest, all} from 'redux-saga/effects';
import {login, setUser, getUser} from '@/reducers/userSlice';
import {handleLogin, handleSetUser, handleGetUser} from '@/sagas/handlers/user';

export default function* rootSaga() {
  yield all([
    takeLatest(login.type, handleLogin),
    takeLatest(getUser.type, handleGetUser),
    takeLatest(setUser.type, handleSetUser),
  ]);
}

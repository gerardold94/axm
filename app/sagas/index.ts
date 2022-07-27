import {takeLatest, all, fork} from 'redux-saga/effects';
import {login, logout, setUser, getUser, saveUser, saveProfile} from '@/reducers/userSlice';
import imagesSaga from '@/sagas/imageSagas';
import postsSaga from '@/sagas/postSagas';
import {
  handleLogout,
  handleLogin,
  handleSetUser,
  handleGetUser,
  handleSaveUser,
  handleSaveProfile
} from '@/sagas/handlers/user';

export default function* rootSaga() {
  yield all([
    takeLatest(login.type, handleLogin),
    takeLatest(logout.type, handleLogout),
    takeLatest(getUser.type, handleGetUser),
    takeLatest(setUser.type, handleSetUser),
    takeLatest(saveUser.type, handleSaveUser),
    takeLatest(saveProfile.type, handleSaveProfile),
    yield fork(imagesSaga),
    yield fork(postsSaga),
  ]);
}

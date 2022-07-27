import {call, put} from 'redux-saga/effects';
import {
  setUser,
  loginSuccess,
  logoutSuccess,
  setError,
} from '@/reducers/userSlice';
import {requestLogin, requestRegister, requesUpdateProfile} from '@/sagas/requests/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

interface Action {
  type: any;
  payload: {
    email: string;
    password: string;
  };
}

interface User {
  type: any;
  payload: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  };
}

interface Profile {
  type: any;
  payload: {
    firstname: string;
    lastname: string;
    email: string;
    state?: string;
    city?: string;
    country?: string;
    dob?: string;
  }
}

export function* handleLogin(action: Action) {
  try {
    const {email, password} = action.payload;
    const response: AxiosResponse = yield call(requestLogin, email, password);
    const {data} = response;

    yield AsyncStorage.removeItem('user');
    yield AsyncStorage.setItem('token', data.token.token);
    yield AsyncStorage.setItem(
      'user',
      JSON.stringify({user: {...data.user, isLogged: true, isLoading: false}}),
    );
    yield put(loginSuccess({...data}));
  } catch (e: any) {
    const errorMessage =
      e?.response?.data ||
      'Ocurrió un error.\nYa estamos trabajando en arreglarlo.';

    yield put(setError({errorMessage, isError: true, isLoading: false}));
  }
}

export function* handleLogout() {
  yield AsyncStorage.removeItem('token');
  yield AsyncStorage.removeItem('user');
  yield put(logoutSuccess(null));
}

export function* handleSetUser(action: any) {
  if (!action.payload.isLogged) {
    return;
  }
  yield AsyncStorage.setItem('user', JSON.stringify(action.payload));
}

export function* handleGetUser() {
  const user: string = yield AsyncStorage.getItem('user');

  if (user) {
    yield put(setUser({...JSON.parse(user)}));
  } else {
    yield put(setUser({user: {isLoading: false, isLogged: false}}));
  }
}

export function* handleSaveUser(action: User) {
  try {
    const response: AxiosResponse = yield call(requestRegister, action.payload);
    const {data} = response;

    yield AsyncStorage.setItem('token', data.token.token);
    yield AsyncStorage.setItem(
      'user',
      JSON.stringify({user: {...data.user, isLogged: true, isLoading: false}}),
    );
    yield put(loginSuccess({...data}));
  } catch (e: any) {
    const errorMessage = e.response.data.errors[0].message;

    yield put(setError({errorMessage, isError: true}));
  }
}

export function* handleSaveProfile(action: Profile) {
  try {
    const response: AxiosResponse = yield call(requesUpdateProfile, action.payload);
    const { data } = response;

    console.log('Response', data);
  } catch (e: any) {

  }
}

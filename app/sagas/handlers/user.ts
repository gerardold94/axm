import {call, put} from 'redux-saga/effects';
import {setUser} from '@/reducers/userSlice';
import {requestLogin} from '@/sagas/requests/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Action {
  type: any;
  payload: {
    email: string;
    password: string;
  };
}

export function* handleLogin(action: Action) {
  try {
    const {email, password} = action.payload;
    const response = yield call(requestLogin, email, password);
    const {data} = response;

    yield AsyncStorage.removeItem('user');
    yield AsyncStorage.setItem('token', data.token.token);
    yield put(setUser({...data}));
  } catch (e) {
    console.log('Error:', e);
  }
}

export function* handleSetUser(action: any) {
  if (!action.payload.isLogged) {
    return;
  }
  yield AsyncStorage.setItem('user', JSON.stringify(action.payload));
}

export function* handleGetUser() {
  const user = yield AsyncStorage.getItem('user');

  if (user) {
    yield put(setUser({...JSON.parse(user)}));
  }
}

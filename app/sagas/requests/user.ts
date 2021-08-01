import API from '@common/API';

export function requestLogin(email: string, password: string) {
  return API.post('/login', {email, password});
}

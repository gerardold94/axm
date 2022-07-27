import API from '@common/API';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface Profile {
  firstname: string;
  lastname: string;
  email: string;
  state?: string;
  city?: string;
  country?: string;
  dob?: string;
}

export async function requestLogin(email: string, password: string) {
  return API.post('/login', {email, password});
}

export function requestRegister(user: User) {
  return API.post('/register', user);
}

export async function requesUpdateProfile(profile: Profile) {
  const user = await AsyncStorage.getItem('user') || ''
  const id = JSON.parse(user).user.id

  return API.put(`/users/${id}`, profile);
}
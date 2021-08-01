import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create axios client, pre-configured with baseURL
const API = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
});

// Set JSON Web Token in Client to be included in all calls
API.interceptors.request.use(async function (config) {
  const token = await AsyncStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;

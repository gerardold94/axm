import API from '@common/API';

export async function requestPosts() {
  return API.get('/posts');
}

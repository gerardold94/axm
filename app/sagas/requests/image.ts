import API from '@common/API';

interface WeekImage {
  filename: string;
  title: string;
  author: string;
  place: string;
}

export async function requestImage() {
  return API.get('/image');
}

export async function requestLikeImage(image_id: number, like: boolean) {
  return API.post('/like', {like, image_id});
}

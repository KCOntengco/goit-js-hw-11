export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42874295-3c9ac1284139430bd42eaed2e';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
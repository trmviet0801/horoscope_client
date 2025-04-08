export const TITLE = 'TỬ VI HÔM NAY'
export const BASE_URL = 'http://localhost:8081/'
export const HOME_URL = BASE_URL + 'horoscope'
export const DAILY_OVERVIEW = BASE_URL + 'daily/overview/'
export const CAGETORIES_URL = id => HOME_URL + '/' + id + '/daily';
export const RELATIONSHIP_URL = (firstId, secondId) => BASE_URL + 'relationship/' + firstId + '/' + secondId;
export const GET_POSTS_URL = page => BASE_URL + 'post/page/' + page;
export const GET_POST_URL = postId => BASE_URL + 'post/' + postId;
export const GET_SUGGEST_POSTS = quantity => BASE_URL + 'post/suggest/' + quantity;
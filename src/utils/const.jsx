export const TITLE = 'TỬ VI HÔM NAY'
export const BASE_URL = 'http://localhost:8081/'
export const HOME_URL = BASE_URL + 'horoscope'
export const DAILY_OVERVIEW = BASE_URL + 'daily/overview/'
export const CAGETORIES_URL = id => HOME_URL + '/' + id + '/daily'
export const RELATIONSHIP_URL = (firstId, secondId) => BASE_URL + 'relationship/' + firstId + '/' + secondId 
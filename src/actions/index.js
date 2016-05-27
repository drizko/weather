import axios from 'axios';

const API_KEY = 'e0eed53b4fa6515bb4abca3e3fd92e0f';
const = ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creator
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const = request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

import { DateTime } from 'luxon';

const API_KEY = 'e40c651d8a8c50677715e99abd20fa7a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + '/' + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: detail, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    detail,
    icon,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, hourly, daily } = data;
  daily = daily.slice(1, 7).map((day) => {
    return {
      title: formatToLocalTime(day.dt, timezone, 'ccc'),
      temp: day.temp.day,
      icon: day.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 7).map((day) => {
    return {
      title: formatToLocalTime(day.dt, timezone, 'hh:mm a'),
      temp: day.temp,
      icon: day.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    'weather',
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWether = await getWeatherData('onecall', {
    lat,
    lon,
    exclude: 'current,minutely,alerts',
    units: searchParams.units,
  }).then((data) => formatForecastWeather(data));
  return { ...formattedCurrentWeather, ...formattedForecastWether };
};

const getFourWeatherData = (searchParams) => {
  const tehran = getWeatherData('weather', { q: 'tehran' }).then((data) =>
    formatCurrentWeather(data)
  );

  const tokyo = getWeatherData('weather', { q: 'tokyo' }).then((data) =>
    formatCurrentWeather(data)
  );

  const seoul = getWeatherData('weather', { q: 'seoul' }).then((data) =>
    formatCurrentWeather(data)
  );

  const toronto = getWeatherData('weather', { q: 'toronto' }).then((data) =>
    formatCurrentWeather(data)
  );
  return [tehran, tokyo, seoul, toronto];
};

const formatToLocalTime = (
  secs,
  zone,
  format = "ccc, dd LLL yyyy' | local time: 'hh: mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export { formatToLocalTime, getFourWeatherData };

export default getFormattedWeatherData;

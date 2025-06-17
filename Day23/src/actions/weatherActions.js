
const API_KEY = '6b8475d1939bb5502208fc73e60459e5'; 

export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' });
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error('City not found or API error');
      const data = await res.json();
      dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error.message });
    }
  };
};

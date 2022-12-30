import './App.css';
import getFormattedWeatherData from './services/weatherService';

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'tehran' });
    console.log(data);
  };

  fetchWeather();
  return <div className="App">Hello react</div>;
}

export default App;

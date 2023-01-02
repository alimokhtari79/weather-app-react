import { Route, Switch } from 'react-router-dom';
import './App.css';
import SegmentsNavLg from './components/SegmentesNavLg';
import HomePage from './Pages/HomePage';
import getFormattedWeatherData from './services/weatherService';

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'tehran' });
    console.log(data);
  };

  fetchWeather();
  return (
    <main className="flex items-center justify-center">
      <div className="app w-full lg:w-3/4 xl:w-3/5 h-[500px] sm:h-screen">
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </div>
      <SegmentsNavLg />
    </main>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ExplorePage from './Pages/ExplorePage';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import SettingPage from './Pages/SettingPage';
import getFormattedWeatherData, {
  getFourWeatherData,
} from './services/weatherService';

function App() {
  const [query, setQuery] = useState({ q: 'isfahan' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) =>
        setWeather(data)
      );
    };

    fetchWeather();
  }, [query, units]);

  const fetchFourWeatherData = async () => {
    const result = await Promise.all(getFourWeatherData());
    console.log(result);
  };

  fetchFourWeatherData();

  return (
    <main className="flex w-full items-center justify-center">
      <div className="app w-full lg:w-3/4 xl:w-3/5 h-[500px] sm:h-screen">
        <Layout>
          <Switch>
            <Route
              path="/"
              render={() => <HomePage weather={weather} units={units} />}
              exact
            />
            <Route path="/search" component={SearchPage} />
            <Route path="/explore" component={ExplorePage} />
            <Route path="/setting" render={() => <SettingPage />} />
          </Switch>
        </Layout>
      </div>
    </main>
  );
}

export default App;

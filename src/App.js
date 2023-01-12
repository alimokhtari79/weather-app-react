import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ExplorePage from './Pages/ExplorePage';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import SettingPage from './Pages/SettingPage';
import getFormattedWeatherData, {
  getFourWeatherData,
} from './services/weatherService';
import { AnimatePresence } from 'framer-motion';
import NotFound from './Pages/NotFound';

function App() {
  // Default location is isfahan
  const [query, setQuery] = useState({ q: 'isfahan' });
  const [units, setUnits] = useState('metric');
  const [isMetric, setIsMetric] = useState(false);
  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) =>
        setWeather(data)
      );
    };

    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    const fetchFourWeatherData = async () => {
      await Promise.all(getFourWeatherData({ units })).then((data) =>
        setCities(data)
      );
    };

    fetchFourWeatherData();
  }, [units]);

  const location = useLocation();

  return (
    <main className="flex w-full items-center justify-center">
      <div className="app w-full lg:w-3/4 xl:w-3/5 h-[500px] sm:h-screen">
        <Layout>
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route
                path="/"
                render={() => <HomePage units={units} weather={weather} />}
                exact
              />
              <Route
                path="/search"
                render={() => <SearchPage setQuery={setQuery} />}
              />
              <Route
                path="/explore"
                render={() => (
                  <ExplorePage cities={cities} setQuery={setQuery} />
                )}
              />
              <Route
                path="/setting"
                render={() => (
                  <SettingPage
                    weather={weather}
                    units={units}
                    setUnits={setUnits}
                    isMetric={isMetric}
                    setIsMetric={setIsMetric}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </AnimatePresence>
        </Layout>
      </div>
    </main>
  );
}

export default App;

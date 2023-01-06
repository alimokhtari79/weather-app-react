import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ExplorePage from './Pages/ExplorePage';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import SettingPage from './Pages/SettingPage';
import getFormattedWeatherData from './services/weatherService';

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'tehran' });
    console.log(data);
  };

  fetchWeather();
  return (
    <main className="flex w-full items-center justify-center">
      <div className="app w-full lg:w-3/4 xl:w-3/5 h-[500px] sm:h-screen">
        <Layout>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/search" component={SearchPage} />
            <Route path="/explore" component={ExplorePage} />
            <Route path="/setting" component={SettingPage} />
          </Switch>
        </Layout>
      </div>
    </main>
  );
}

export default App;

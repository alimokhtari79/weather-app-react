import Header from '../components/Header';
import Explore from './../components/Explore';

const ExplorePage = ({ cities }) => {
  return (
    <div className="p-6">
      <Header title="Explore" />
      <div className="explore-container grid my-6">
        {cities &&
          cities.map((city) => <Explore key={city.name} city={city} />)}
      </div>
      <div className="mb-16"></div>
    </div>
  );
};

export default ExplorePage;

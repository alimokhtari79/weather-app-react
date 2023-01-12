import Header from '../components/Header';
import Explore from './../components/Explore';
import { motion } from 'framer-motion';
import Loading from '../components/Loading';

const ExplorePage = ({ cities, setQuery }) => {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header title="Explore" />
      <div className="explore-container grid my-6">
        {cities ? (
          cities.map((city) => (
            <Explore key={city.name} city={city} setQuery={setQuery} />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <div className="mb-16"></div>
    </motion.div>
  );
};

export default ExplorePage;

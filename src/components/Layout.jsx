import SegmentsNavLg from './SegmentsNavLg';
import SegmentsNav from './SegmentsNav';

const Layout = ({ children }) => {
  return (
    <>
      <SegmentsNavLg />
      {children}
      <footer>
        <SegmentsNav />
      </footer>
    </>
  );
};

export default Layout;

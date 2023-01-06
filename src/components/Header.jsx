import { IoChevronBack } from 'react-icons/io5';

const Header = ({ title }) => {
  return (
    <header className="flex items-center justify-between">
      <button>
        <IoChevronBack />
      </button>
      <p>{title}</p>
      <div></div>
    </header>
  );
};

export default Header;

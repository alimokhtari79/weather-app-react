import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <p className="mb-10">Not Found 404</p>
      <Link to="/" className="text-yellow-400 text-2xl">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

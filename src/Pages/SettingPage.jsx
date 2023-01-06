import React from 'react';
import Header from '../components/Header';

const SettingPage = () => {
  return (
    <div className="p-6">
      <Header title="Setting" />
      <div className="setting-container flex flex-col items-center my-6">
        <div className="time text-8xl mb-9">
          <p>14:25</p>
        </div>
        <div className="w-full py-4 px-7 mb-10 flex justify-between rounded-full glassEffect">
          <p>Temperature based on</p>
          <p className="text-yellow-400">C</p>
        </div>
        <div className="w-full py-4 px-7 mb-10 flex justify-between rounded-full glassEffect">
          <p>Theme</p>
          <p className="text-yellow-400">Dark</p>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;

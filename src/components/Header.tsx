import { useState } from 'react';

const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

const Header = () => {
  const [activeTab, setActiveTab] = useState('All Orders');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    console.log(`Tab selected: ${tab}`);
  };

  return (
    <div className="flex gap-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`px-4 py-2 rounded-md font-medium ${
            tab === activeTab ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Header;
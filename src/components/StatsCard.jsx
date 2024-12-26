import React from 'react';

const StatsCard = () => {
  const stats = [
    { value: '20+', label: 'Language Support' },
    { value: '100+', label: 'Developers' },
    { value: '500K+', label: 'Users Used' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-4 w-full max-w-sm">
      <div className="flex items-center space-x-2 mb-4">
        <img src="/path-to-your-logo.png" alt="AI to Detect & Autofic Bad Code" className="h-6" />
        <span className="text-sm">AI to Detect & Autofic Bad Code</span>
      </div>
      
      <div className="flex justify-between mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="font-semibold">{stat.value}</div>
            <div className="text-xs text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
        <div>
          <div className="text-sm text-gray-600">Active Pool</div>
          <div className="font-semibold text-xl">500K+</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
import React from 'react';
import { Home, Code, Shield, HelpCircle, Settings, Phone, LogOut, ChevronDown } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, text: 'Repositories', active: true },
    { icon: <Code size={20} />, text: 'AI Code Review' },
    { icon: <Shield size={20} />, text: 'Cloud Security' },
    { icon: <HelpCircle size={20} />, text: 'How to Use' },
    { icon: <Settings size={20} />, text: 'Settings' },
  ];

  const bottomItems = [
    { icon: <Phone size={20} />, text: 'Support' },
    { icon: <LogOut size={20} />, text: 'Logout' },
  ];

  return (
    <div className="hidden lg:flex w-64 min-h-screen bg-white border-r border-gray-200 p-4 flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <div className="flex items-center space-x-2">
          <img src="/Logo.png" alt="CodeAnt AI" className="w-40" />
        </div>
      </div>

      {/* User Dropdown */}
      <div className="mb-6">
        <button className="w-full px-3 py-2 text-left flex items-center justify-between border rounded-lg hover:bg-gray-50">
          <span className="truncate">TestUserName</span>
          <ChevronDown size={16} className="text-gray-500" />
        </button>
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center space-x-3 w-full p-2 rounded-lg text-left ${
                item.active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
        
        <div className="mt-auto space-y-1">
          {bottomItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center space-x-3 w-full p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
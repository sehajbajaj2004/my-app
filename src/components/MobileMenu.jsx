import React from 'react';
import { X } from 'lucide-react';
import { Home, Code, Shield, HelpCircle, Settings, Phone, LogOut } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, userName }) => {
  const menuItems = [
    { icon: <Home size={20} />, text: 'Repositories' },
    { icon: <Code size={20} />, text: 'AI Code Review' },
    { icon: <Shield size={20} />, text: 'Cloud Security' },
    { icon: <HelpCircle size={20} />, text: 'How to Use' },
    { icon: <Settings size={20} />, text: 'Settings' },
    { icon: <Phone size={20} />, text: 'Support' },
    { icon: <LogOut size={20} />, text: 'Logout' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 lg:hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">CodeAnt AI</span>
          </div>
          <button onClick={onClose} className="p-2">
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <select className="w-full p-2 border rounded-lg">
            <option>{userName}</option>
          </select>
        </div>

        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100"
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

export default MobileMenu;
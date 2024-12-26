import React from 'react';
import { Search, RefreshCw, Plus, Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">CodeAnt AI</span>
        </div>
        <button onClick={onMenuClick} className="p-2">
          <Menu size={24} />
        </button>
      </div>

      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div className="flex-1">
          <div className=' mb-8'>
            <h1 className="text-3xl font-semibold">Repositories</h1>
            <p className='text-sm text-gray-600 mt-1'>7 total repositories</p>
          </div>
          
          
          <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 max-w-[350px]">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search Repositories"
              className="ml-2 flex-1 outline-none"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="p-2 pl-3 pr-3 hover:bg-gray-100 rounded-lg max-w-[400px] border-2">
            <div className='flex'>
              Refresh All <RefreshCw size={20}  className='ml-4'/>
            </div>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            <span>Add Repository</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
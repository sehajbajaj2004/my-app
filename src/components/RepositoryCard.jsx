import React from 'react';

const RepositoryCard = ({ repo }) => {
  return (
    <div className="p-4 border-b border-gray-200 hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-medium">{repo.name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${
              repo.visibility === 'Public' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {repo.visibility}
            </span>
          </div>
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${
                repo.languageColor || 'bg-gray-400'
              }`}></span>
              <span>{repo.language}</span>
            </div>
            <span>{repo.size} KB</span>
            <span>Updated {repo.updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
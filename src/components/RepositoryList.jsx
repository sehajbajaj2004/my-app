import React from 'react';
import RepositoryCard from './RepositoryCard';

const RepositoryList = ({ repositories }) => {
  return (
    <div className="bg-white rounded-lg">
      {repositories.map((repo, index) => (
        <RepositoryCard key={index} repo={repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
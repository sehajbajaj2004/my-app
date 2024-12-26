import React from 'react';
import { Github, GitlabIcon } from 'lucide-react';

const LoginForm = ({ onLogin }) => {
  const loginOptions = [
    { icon: <Github className="w-5 h-5" />, text: 'Sign in with Github', onClick: onLogin },
    { icon: <img src="/bitBucket.png" alt="" className="w-5 h-5" />, text: 'Sign in with Bitbucket', onClick: onLogin },
    { icon: <img src="/azureDevOps.png" alt="" className="w-5 h-5" />, text: 'Sign in with Azure DevOps', onClick: onLogin },
    { icon: <GitlabIcon className="w-5 h-5" />, text: 'Sign in with GitLab', onClick: onLogin },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg w-[1700px]">
      <div className="flex flex-col items-center mb-6">
        <img src="/Logo.png" className="h-10 mb-2" />
        <h1 className="text-xl font-semibold">Welcome to CodeAnt AI</h1>
      </div>

      <div className="flex space-x-2 mb-6">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          SAAS
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200">
          Self Hosted
        </button>
      </div>

      <div className="space-y-3">
        {loginOptions.map((option, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-center space-x-2 py-2 px-4 border rounded-lg hover:bg-gray-50"
            onClick={option.onClick}
          >
            {option.icon}
            <span>{option.text}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        By signing up you agree to the{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
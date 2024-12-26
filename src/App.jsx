import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RepositoryList from './components/RepositoryList';
import MobileMenu from './components/MobileMenu';
import LoginPage from './components/LoginPage';

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  
  const repositories = [
    {
      name: 'design-system',
      visibility: 'Public',
      language: 'React',
      languageColor: 'bg-blue-400',
      size: '7320',
      updatedAt: '1 day ago'
    },
    {
      name: 'react-web-app',
      visibility: 'Private',
      language: 'React',
      languageColor: 'bg-green-400',
      size: '7320',
      updatedAt: '1 day ago'
    },
    {
      name: 'full-system',
      visibility: 'Public',
      language: 'React',
      languageColor: 'bg-red-400',
      size: '7320',
      updatedAt: '1 day ago'
    },
    {
      name: 'mobile-app',
      visibility: 'Private',
      language: 'React',
      languageColor: 'bg-pink-400',
      size: '7320',
      updatedAt: '1 day ago'
    },
    {
      name: 'new-app',
      visibility: 'Private',
      language: 'React',
      languageColor: 'bg-blue-400',
      size: '7320',
      updatedAt: '1 day ago'
    },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onLogout={handleLogout} />
      <div className="flex-1">
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
        <main className="p-4 lg:p-6">
          <div className="mb-4 text-sm text-gray-600">
            {repositories.length} total repositories
          </div>
          <RepositoryList repositories={repositories} />
        </main>
      </div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        userName="UtkarshDhairyaPanwar"
        onLogout={handleLogout}
      />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MainLayout.css';

/**
 * ceci est un composant de stucture d'une page de l'application
 *
 * @param {*} children
 * @returns
 */
const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isCommande =
    pathname.split('/')[1] === 'client' ||
    pathname.split('/')[1] === 'commande';
  const isClient = pathname === '/';

  const hightlight = 'dark:bg-gray-50 bg-gray-700 text-gray-700 px-5';

  return (
    <div className="flex items-center justify-center w-full h-full text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-50">
      <div className="relative flex flex-col w-4/5 border-gray-800 dark:border-gray-50 h-4/5 sm:w-5/6 sm:h-5/6 main-layout-wrapper dark:bg-gray-700">
        <nav className="absolute flex items-center justify-center text-sm h-7 left-2 w-fit main-layout-tabs -top-7">
          <button
            className={`px-5 h-7 rounded-tl-lg flex items-center justify-center ${
              isClient && hightlight
            }`}
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            Client
          </button>
          <button
            className={`px-5 h-7 rounded-tr-lg flex items-center justify-center ${
              isCommande && hightlight
            }`}
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            Commande
          </button>
        </nav>

        <div className="flex flex-col items-center justify-center w-full h-full main-layout-content grow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

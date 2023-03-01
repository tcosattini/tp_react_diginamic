import React from 'react';
import { useLocation } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center justify-center w-full h-full text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-50">
      {buildLayout(children, pathname)}
    </div>
  );
};

const buildLayout = (children, pathname) => {
  return (
    <div className="relative flex flex-col w-4/5 border-gray-800 dark:border-gray-50 h-4/5 sm:w-5/6 sm:h-5/6 main-layout-wrapper dark:bg-gray-700">
      {placeTabs(pathname)}
      {displayContent(children)}
    </div>
  );
};

const placeTabs = (pathname) => {
  const isRoot = pathname === '/';
  const hightlight = 'dark:bg-gray-50 bg-gray-700 text-gray-700 px-5';
  return (
    <nav className="absolute flex items-center justify-center text-sm left-2 w-fit main-layout-tabs -top-7">
      <a
        className={`px-5 flex items-center justify-center ${
          isRoot && hightlight
        }`}
        href="/"
      >
        Client
      </a>
      <a
        className={`px-5 flex items-center justify-center ${
          !isRoot && hightlight
        }`}
        href="."
      >
        Commande
      </a>
    </nav>
  );
};

const displayContent = (children) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full main-layout-content grow">
      {children}
    </div>
  );
};

export default MainLayout;

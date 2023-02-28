import React from 'react';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-full main-layout">
      {buildLayout(children)}
    </div>
  );
};

const buildLayout = (children) => {
  return (
    <div className="relative flex flex-col w-4/5 h-4/5 sm:w-5/6 sm:h-5/6 main-layout-wrapper">
      {placeTabs()}
      {displayContent(children)}
    </div>
  );
};

const placeTabs = () => {
  return (
    <nav className="absolute visible left-2 w-fit main-layout-tabs -top-7">
      <a
        className="px-5"
        href="/"
      >
        Client
      </a>
    </nav>
  );
};

const displayContent = (children) => {
  return <div className="w-full main-layout-content grow">{children}</div>;
};

export default MainLayout;

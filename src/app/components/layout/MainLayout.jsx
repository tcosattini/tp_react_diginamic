import React from 'react';

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
    <nav className="absolute visible w-full main-layout-tabs -top-7">TABS</nav>
  );
};

const displayContent = (children) => {
  return <div className="w-full main-layout-content grow">{children}</div>;
};

export default MainLayout;

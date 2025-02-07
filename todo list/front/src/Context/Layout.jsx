import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="border border-gray-400 bg-white px-2 rounded-lg w-auto h-full overflow-hidden items-center justify-center flex">
      {children}
    </div>
  );
};

export default Layout;

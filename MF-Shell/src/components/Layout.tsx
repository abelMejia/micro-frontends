import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col bg-gray-100 mt-2 gap-4 p-4 min-h-screen align-items-start"
      style={{ margin: '0 auto', maxWidth: '1024px', padding: '2rem 1rem' }}>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;

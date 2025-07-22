import React from 'react';

const NotFound: React.FC = () => (
  <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
    <span style={{ fontSize: '3rem' }} role="img" aria-label="warning">⚠️</span>
    <h2>404 - Page Not Found</h2>
  </div>
);

export default NotFound;

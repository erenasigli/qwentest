import React from 'react';
import HelloWorld from './components/HelloWorld';

const App: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <HelloWorld />
    </div>
  );
};

export default App;
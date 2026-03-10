import React from 'react';
import HelloWorld from './components/HelloWorld';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
      <HelloWorld />
      <Footer />
    </div>
  );
};

export default App;
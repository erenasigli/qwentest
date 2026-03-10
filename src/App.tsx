import React from 'react';
import HelloWorld from './components/HelloWorld';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
      <HelloWorld />
      <a href='https://www.google.com' target='_blank' rel='noopener noreferrer' className='mt-4 text-blue-500 underline'>Go to Google</a>
      <Footer />
    </div>
  );
};

export default App;
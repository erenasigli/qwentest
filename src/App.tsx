import React from 'react';
import EventRegistrationForm from './components/EventRegistrationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
      <EventRegistrationForm />
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import Button from './Button';

const EventRegistrationForm: React.FC = () => {
  return (
    <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
      <h2 className='text-2xl font-bold mb-6'>Event Registration</h2>
      <form>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
          <input type='text' id='name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>
        <div className='mb-6'>
          <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
          <input type='email' id='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
        </div>
        <div className='flex items-center justify-between'>
          <Button label='Gönder' />
        </div>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
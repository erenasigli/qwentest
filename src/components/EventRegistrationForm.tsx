import React, { useState } from 'react';

interface FormData {
  fullName: string;
  dateOfBirth: string;
  address: string;
}

const EventRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ fullName: '', dateOfBirth: '', address: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add logic to save the form data
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
      <div className='mb-4'>
        <label htmlFor='fullName' className='block text-gray-700 text-sm font-bold mb-2'>Ad Soyad</label>
        <input
          type='text'
          id='fullName'
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='dateOfBirth' className='block text-gray-700 text-sm font-bold mb-2'>Doğum Tarihi</label>
        <input
          type='date'
          id='dateOfBirth'
          name='dateOfBirth'
          value={formData.dateOfBirth}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          required
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='address' className='block text-gray-700 text-sm font-bold mb-2'>Adres</label>
        <input
          type='text'
          id='address'
          name='address'
          value={formData.address}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          required
        />
      </div>
      <div className='flex items-center justify-between'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default EventRegistrationForm;